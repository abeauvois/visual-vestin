import styled from "styled-components";
import { motion } from "framer-motion";

export const H1 = styled(motion.h1)``;
export const H2 = styled(motion.h2)``;

export const Container = styled(motion.div)`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 2.2rem;
  grid-auto-flow: dense;
`;

export const Row = styled("div")`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
`;

export const CardBox = styled(motion.div)`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const IconBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
