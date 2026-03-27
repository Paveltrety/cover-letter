import { E_AGGREGATOR_TYPE } from '@/api/types';

interface IInfoFromVacancyLink {
  id: string;
  aggregatorType: E_AGGREGATOR_TYPE | null;
}

export const getInfoFromVacancyLink = (link: string): IInfoFromVacancyLink => {
  if (!link) {
    return { id: '', aggregatorType: null };
  }

  try {
    const normalizedLink = link.startsWith('http') ? link : `https://${link}`;

    const url = new URL(normalizedLink);
    const { hostname, pathname } = url;

    // HH
    if (hostname.includes('hh.ru') && /^\/vacancy\/\d+/.test(pathname)) {
      const match = pathname.match(/\/vacancy\/(\d+)/);
      return {
        id: match?.[1] ?? '',
        aggregatorType: E_AGGREGATOR_TYPE.HH,
      };
    }

    // GETMATCH
    if (hostname.includes('getmatch.com') || hostname.includes('getmatch.ru')) {
      const match = pathname.match(/\/vacancies\/(\d+)/);
      return {
        id: match?.[1] ?? '',
        aggregatorType: E_AGGREGATOR_TYPE.GETMATCH,
      };
    }

    // ZARPLATA
    if (hostname.includes('zarplata.ru') && /^\/vacancy\/\d+/.test(pathname)) {
      const match = pathname.match(/\/vacancy\/(\d+)/);
      return {
        id: match?.[1] ?? '',
        aggregatorType: E_AGGREGATOR_TYPE.ZARPLATA,
      };
    }

    return { id: '', aggregatorType: null };
  } catch {
    return { id: '', aggregatorType: null };
  }
};
