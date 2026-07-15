export const formatPrice = (number) => {
  return Number(number.replaceAll('.', ''));
}

export const numberToCurrency = (number) => {
  const numberFormat = new Intl.NumberFormat("es-ES");
  return numberFormat.format(number);
}