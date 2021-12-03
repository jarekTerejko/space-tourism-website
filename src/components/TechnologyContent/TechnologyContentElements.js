import styled from "styled-components";
import {motion} from 'framer-motion'

export const TechnologyContentWrapper = styled.section`
  position: relative;
  padding-top: 21.2rem;

  @media screen and (max-width: 768px) {
    padding-top: 13.6rem;
  }

  @media screen and (max-width: 375px) {
    padding-top: 8.8rem;
  }
`;

export const TechnologyContentInnerWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 80px;
  min-height: 527px;

  @media screen and (max-width: 1250px) {
    column-gap: 40px;
  }

  @media screen and (max-width: 1180px) {
    grid-template-columns: max-content 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    margin-top: 42.6rem;
    margin-top: 55vw;
    grid-template-columns: 1fr;
    min-height: unset;
  }

  @media screen and (max-width: 570px) {
    margin-top: 68vw;
  }
  @media screen and (max-width: 375px) {
    margin-top: 23.6rem;
  }
`;

export const TechnologyContentCircleBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13.7rem;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    justify-content: center;
  }
`;

export const TechnologyContentCircleBtn = styled(motion.button)`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: none;
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 8rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: var(--transition);
  background: none;
  color: var(--color-white);
  cursor: pointer;
  margin-bottom: 3.2rem;

  @media screen and (max-width: 768px) {
    margin-right: 1.6rem;
    margin-bottom: 0;
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    font-size: 2.4rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 375px) {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.6rem;
  }

  &.active {
    background: var(--color-white);
    color: var(--color-dark);
  }

  &:hover {
    border-color: var(--color-white);
  }
`;

export const TechnologyContentColDescription = styled(motion.div)`
  margin-top: 13.7rem;

  @media screen and (max-width: 768px) {
    margin-top: 4.4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TechnologyContentSubheading = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  color: var(--color-light-violet);
  margin-bottom: 1.1rem;
  display: inline-block;
`;
