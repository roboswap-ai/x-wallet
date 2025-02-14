const X_CHAIN_GAS_PRICE = 0.00000001;
const X_CHAIN_GAS_LIMIT = 400;
const X_CHAIN_TTL = 28800;

const GAS_PRICE = 0.000001;
const GAS_LIMIT = 800;

export const CONFIG = {
  X_CHAIN_GAS_PRICE,
  X_CHAIN_GAS_LIMIT,
  X_CHAIN_TTL,
  GAS_PRICE,
  GAS_LIMIT,
};
export const NUMBER_DECIMAL_AFTER_DOT = 12;
export const ESTIMATE_KDA_TO_USD_API = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=kadena,';
export const TELEGRAM_GROUP_LINK = 'https://t.me/kadena_io';
export const WEBSITE_LINK = 'https://kaddex.com/';
export const TERM_LINK = 'https://xwallet.kaddex.com/terms-of-use';
export const GAS_CONFIGS = {
  ECONOMY: {
    LABEL: 'Economy',
    GAS_PRICE: 0.00000001,
    GAS_LIMIT,
  },
  NORMAL: {
    LABEL: 'Normal',
    GAS_PRICE,
    GAS_LIMIT,
  },
  FAST: {
    LABEL: 'Fast',
    GAS_PRICE: 0.0001,
    GAS_LIMIT,
  },
};
