import { parseVacancyRequest } from '@/api/requests';
import type { IParseVacancyRequestParams, IParseVacancyRequestResponse } from '@/api/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useParseVacancy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: IParseVacancyRequestParams) => {
      if (!params.id) throw new Error('vacancy id required');

      return queryClient.fetchQuery<IParseVacancyRequestResponse>({
        queryKey: ['parce-vacancy', `${params.id}_${params.aggregatorType}`],
        queryFn: () => parseVacancyRequest(params),
        staleTime: Infinity, // никогда не перезапрашивать
      });
    },
  });
};
