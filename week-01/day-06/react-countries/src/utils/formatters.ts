export const formatNumber = (num: number): string => {
  return Intl.NumberFormat().format(num);
};
