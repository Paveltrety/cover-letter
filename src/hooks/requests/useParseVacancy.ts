import { parseVacancyRequest } from '@/api/requests';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useParseVacancy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (value: string) => {
      if (!value) throw new Error('vacancy id required');

      return queryClient.fetchQuery({
        queryKey: ['parce-vacancy', value],
        queryFn: () => parseVacancyRequest(value),
        staleTime: Infinity, // никогда не перезапрашивать
      });
    },
  });
};

//export const useParseVacancyQuery = () => {
//  const queryClient = useQueryClient();

//  const parseVacancy = useCallback(
//    async (value: string) => {
//      const data = await queryClient.fetchQuery({
//        queryKey: ['vacancy', value],
//        queryFn: () => parseVacancyApi(value),
//        staleTime: Infinity,
//      });

//      if (!data) {
//        throw new Error('Что-то пошло не так во время запроса');
//      }

//      return data.description;
//    },
//    [queryClient],
//  );

//  return parseVacancy;

//};
