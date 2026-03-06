import { api } from './config';
import type {
  IGenerateCoverLetterRequestParams,
  IGenerateCoverLetterResponse,
  IParseVacancyRequestParams,
  IParseVacancyRequestResponse,
} from './types';

export const generateCoverLetterRequest = async (params: IGenerateCoverLetterRequestParams): Promise<IGenerateCoverLetterResponse> => {
  const { data } = await api.get(`/head-hunter/generate-cover-letter`, {
    params,
  });

  return data;
};

export const parseVacancyRequest = async (params: IParseVacancyRequestParams): Promise<IParseVacancyRequestResponse> => {
  const { data } = await api.get('/head-hunter/parse-vacancy', {
    params,
  });

  return data;
};
