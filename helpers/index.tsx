const currency = new Intl.NumberFormat("id-ID", {
  style: "decimal",
});

export const formatCurrency = (value: number | string) =>
  currency.format(typeof value === "string" ? parseInt(value) : value);
