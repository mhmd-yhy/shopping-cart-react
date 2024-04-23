const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {currency: "USD", style: "currency"});

const formatCurreny = (price) => CURRENCY_FORMATER.format(price);

export default formatCurreny;
