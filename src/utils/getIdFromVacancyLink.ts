export const getIdFromVacancyLink = (link: string): string => {
  if (!link) return '';

  try {
    // пытаемся распарсить как URL
    const url = new URL(link);

    const match = url.pathname.match(/\/vacancy\/(\d+)/);
    return match?.[1] ?? '';
  } catch {
    // fallback если передали просто строку без протокола или кривой URL
    const match = link.match(/\/vacancy\/(\d+)/);
    return match?.[1] ?? '';
  }
};
