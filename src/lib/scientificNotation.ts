export const scientificNotation = (num: number): string => {
  if (num === 0) return '0';
  const exponent = Math.floor(Math.log10(Math.abs(num)));
  const mantissa = num / Math.pow(10, exponent);
  return `${mantissa.toFixed(2)}e${exponent}`;
};
