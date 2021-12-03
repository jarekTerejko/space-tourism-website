import { motion } from "framer-motion";
import styled from "styled-components";

export const HomepageHeroWrapper = styled.header`
  padding-top: 38.7rem;

  @media screen and (max-width: 850px) {
    padding-top: 20rem;
  }
  @media screen and (max-width: 375px) {
    padding-top: 11.2rem;
  }
`;
export const HomepageHeroInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    text-align: center;
    grid-row-gap: 156px;
  }

  @media screen and (max-width: 560px) {
    grid-row-gap: 28px;
  }
`;
export const HomepageHeroColLeft = styled(motion.div)`
  @media screen and (max-width: 850px) {
  }
`;

export const HomepageHeroColRight = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 1300px) {
    margin: 0 4.4rem 4.4rem 4.4rem;
  }

  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`;
