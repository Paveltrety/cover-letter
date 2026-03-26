import { generateCoverLetterRequest } from '@/api/requests';
import type { IParseVacancyRequestParams } from '@/api/types';
import { Toaster } from '@/components/ui/Toaster';
import { useParseVacancy } from '@/hooks/requests/useParseVacancy';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';

export const useCoverLetterRequest = () => {
  const parseVacancy = useParseVacancy();

  const generateCoverLetter = useMutation({
    mutationFn: generateCoverLetterRequest,
  });

  const handleCoverLetterRequest = useCallback(
    async (info: IParseVacancyRequestParams) => {
      try {
        const { vacancyId } = await parseVacancy.mutateAsync(info);
        const { coverLetter } = await generateCoverLetter.mutateAsync({ vacancyId });
        return coverLetter;
      } catch {
        Toaster.error('Что-то пошло не так');

        return null;
      }
    },
    [parseVacancy, generateCoverLetter],
  );

  const isLoading = generateCoverLetter.isPending || parseVacancy.isPending;
  const isParseVacancyPending = parseVacancy.isPending;

  return useMemo(
    () => ({
      handleCoverLetterRequest,
      isLoading,
      isParseVacancyPending,
    }),
    [handleCoverLetterRequest, isLoading, isParseVacancyPending],
  );
};
