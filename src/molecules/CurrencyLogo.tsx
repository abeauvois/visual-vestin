import React, { useState } from "react";
import styled from "styled-components";

import { Token } from "../types";
import { ETHER } from "../data/Tokens";
//import EthereumLogo from "../assets/ethereum-logo.png";

const getTokenLogoURL = (address) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`;

const getTokenLogoURL1inch = (address) =>
  `https://tokens.1inch.exchange/${address.toLowerCase()}.png`;

const BAD_URIS: { [tokenAddress: string]: true } = {};
const FALLBACK_URIS: { [tokenAddress: string]: string } = {};

const Image = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 24px;
  border: 4px solid #fff;
  box-sizing: content-box;
`;

const Emoji = styled.span<{ size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => size};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin-bottom: -4px;
`;

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 24px;
  border: 4px solid #fff;
  box-sizing: content-box;
`;

function CurrencyLogo({
  currency,
  size = "24px",
  ...rest
}: {
  currency?: Token;
  size?: string;
  style?: React.CSSProperties;
}) {
  const [, refresh] = useState<number>(0);

  // if (currency === ETHER) {
  //   return <StyledEthereumLogo src={EthereumLogo} size={size} {...rest} />;
  // }

  if (currency instanceof Token) {
    let uri: string | undefined;

    if (!uri) {
      const defaultUri = getTokenLogoURL(currency.address);
      if (!BAD_URIS[defaultUri]) {
        uri = defaultUri;
      }
      if (FALLBACK_URIS[currency.address]) {
        uri = FALLBACK_URIS[currency.address];
      }
    }

    if (uri) {
      return (
        <Image
          {...rest}
          alt={`${currency.name} Logo`}
          src={uri}
          size={size}
          onError={() => {
            if (currency instanceof Token) {
              BAD_URIS[uri] = true;
              FALLBACK_URIS[currency.address] = getTokenLogoURL1inch(
                currency.address
              );
            }
            refresh((i) => i + 1);
          }}
        />
      );
    }
  }

  return (
    <Emoji {...rest} size={size}>
      <span role="img" aria-label="Thinking">
        🤔
      </span>
    </Emoji>
  );
}

export { CurrencyLogo };
