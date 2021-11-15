import styled from "styled-components";

export const DestinationContentWrapper = styled.section`
  padding-top: 13.6rem;
`;

export const DestinationContentInnerWrapper = styled.div`
  min-height: 76.4rem;
  padding-top: 7.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
`;
export const DestinationContentColLeft = styled.div``;

export const DestinationContentColRight = styled.div`
  margin-top: 9.7rem;
  margin-left: 11rem;
`;
export const DestinationContentImgWrapper = styled.div`
  margin-top: 9.7rem;
  margin-left: 6.5rem;
`;

export const DestinationNav = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 3.7rem;
  transform: translate(-15px, -5px);
  height: 3.6rem;
`;
export const DestinationaNavItem = styled.li`
  margin: 0 1rem;
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

export const DestinationInfoBox = styled.div`
  position: relative;
  padding-top: 2.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

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
