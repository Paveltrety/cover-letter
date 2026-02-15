import { api } from './config';
import type { IGenerateCoverLetterResponse, IParseVacancyResponse } from './types';

export const generateCoverLetterRequest = async (id: string): Promise<IGenerateCoverLetterResponse> => {
  const { data } = await api.get(`/head-hunter/generate-cover-letter`, {
    params: { id },
  });

  return data;
};

export const parseVacancyRequest = async (id: string): Promise<IParseVacancyResponse> => {
  const { data } = await api.get('/head-hunter/parse-vacancy', {
    params: { id },
  });

  return data;
};
