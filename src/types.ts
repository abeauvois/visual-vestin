import { Token, ChainId } from "@uniswap/sdk";

enum FiatCode {
  USD = "USD",
  EUR = "EUR"
}

// TODO: https://en.wikipedia.org/wiki/ISO_4217
export type Fiat = {
  [FiatCode.USD]: { name: "US Dollar"; symbol: "$"; decimals: 2 };
  [FiatCode.EUR]: { name: "Euro"; symbol: "€"; decimals: 2 };
};

export { Token, ChainId };

export type Value<T = Fiat | Token> = {
  amount: Number;
  CurrencyType: keyof T;
  currency: T;
};
