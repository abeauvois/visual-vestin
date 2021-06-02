import React, { useState } from "react";
import styled from "styled-components";

import { IconBox, H2, Row } from "../atoms";
import { CurrencyLogo } from "./CurrencyLogo";

import { Value } from "../types";

export const Icon = styled("div")`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
`;

type Props = { value: Value };

export function ValueLogoLabel({ value }: Props) {
  return (
    <Row style={{ color: "white" }}>
      <IconBox>
        <CurrencyLogo currency={value.currency} size="32px" />
      </IconBox>
      <H2>{value.amount}</H2>
    </Row>
  );
}
