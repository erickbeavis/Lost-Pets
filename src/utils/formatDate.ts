export const formatDate = (date: string) => {
  const formattedDate = date
    .replace(/[^\d]/g, '')
    .slice(0, 8)
    .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
    .replace(/\/\//g, '/');

  return formattedDate;
};
