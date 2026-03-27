

export interface IGenerateCoverLetterResponse {
  coverLetter: string;
}

export const enum E_AGGREGATOR_TYPE {
  HH = 'HH',
  GETMATCH = 'GETMATCH',
  ZARPLATA = 'ZARPLATA',
}

export interface IParseVacancyRequestParams {
  id: string;
  aggregatorType: E_AGGREGATOR_TYPE;
}

export interface IParseVacancyRequestResponse {
  vacancyId: string;
}

export interface IGenerateCoverLetterRequestParams extends IParseVacancyRequestResponse {}

