import { motion } from "framer-motion";
import styled from "styled-components";

export const DestinationContentWrapper = styled.section`
  padding-top: 13.6rem;
  padding-bottom: 6.2rem;

  @media screen and (max-width: 400px) {
    padding-top: 8.8rem;
  }
`;

export const DestinationContentInnerWrapper = styled.div`
  min-height: 76.4rem;
  padding-top: 7.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 0;
    row-gap: 53px;
  }

  @media screen and (max-width: 400px) {
    min-height: unset;
    row-gap: 26px;
  }
`;
export const DestinationContentColLeft = styled.div``;

export const DestinationContentColRight = styled.div`
  margin-top: 9.7rem;
  margin-left: 11rem;

  @media screen and (max-width: 1150px) {
    margin-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;
export const DestinationContentImgWrapper = styled(motion.div)`
  margin-top: 9.7rem;
  margin-left: 6.5rem;

  @media screen and (max-width: 1150px) {
    margin-left: 0;
  }

  @media screen and (max-width: 768px) {
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    max-width: 30rem;
    margin-left: auto;
    margin-right: auto;
    min-height: 30rem;
  }

  @media screen and (max-width: 400px) {
    margin-top: 3.2rem;
    max-width: 17rem;
    min-height: 17rem;
  }
`;

export const DestinationNav = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 3.7rem;
  transform: translate(-15px, -5px);

  @media screen and (max-width: 768px) {
    transform: translate(0);
    justify-content: center;
    margin-bottom: 3.2rem;
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 2rem;
  }
`;

export const DestinationaNavItem = styled.li`
  margin: 0 1rem;

  @media screen and (max-width: 400px) {
    margin: 0 0.7rem;
  }

  @media screen and (max-width: 350px) {
    margin: 0 0.2rem;
  }
`;

export const DestinationNavBtn = styled.button`
  background: none;
  border: none;
  color: var(--color-light-violet);
  position: relative;
  cursor: pointer;
  font-family: var(--font-family-sans);
  font-size: 1.6rem;
  line-height: 1.9rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1.2rem;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  transition: color var(--transition);

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
    line-height: 1.7rem;
    letter-spacing: 2.3625px;
    padding-bottom: 0.8rem;
  }

  &.active {
    color: var(--color-white);
  }

  &.active::before {
    content: "";
    position: absolute;
    left: 5px;
    bottom: 0px;
    width: calc(100% - 10px);
    height: 3px;
    background: var(--color-white);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 5px;
    bottom: 0;
    width: calc(100% - 10px);
    height: 3px;
    background: var(--color-light-violet);
    opacity: 0;
    transition: opacity var(--transition);
  }

  &:hover&::after {
    opacity: 1;
  }
`;

export const DestinationInfoBox = styled(motion.div)`
  position: relative;
  padding-top: 2.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: hsla(231, 15%, 26%, 1);
  }
`;

export const DestinationInfoBoxColLeft = styled.div``;
export const DestinationInfoBoxColRight = styled.div``;
