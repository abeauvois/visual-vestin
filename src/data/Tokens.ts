export { ETHER } from "@uniswap/sdk";

import { Token, ChainId } from "../types";

export const DAI = new Token(
  ChainId.MAINNET,
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  18,
  "DAI",
  "Dai Stablecoin"
);
export const USDC = new Token(
  ChainId.MAINNET,
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  6,
  "USDC",
  "USD//C"
);
export const USDT = new Token(
  ChainId.MAINNET,
  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  6,
  "USDT",
  "Tether USD"
);
export const COMP = new Token(
  ChainId.MAINNET,
  "0xc00e94Cb662C3520282E6f5717214004A7f26888",
  18,
  "COMP",
  "Compound"
);
export const MKR = new Token(
  ChainId.MAINNET,
  "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
  18,
  "MKR",
  "Maker"
);
export const CHI = new Token(
  ChainId.MAINNET,
  "0x0000000000004946c0e9F43F4Dee607b0eF1fA1c",
  0,
  "CHI",
  "Chi Gastoken by 1inch"
);
