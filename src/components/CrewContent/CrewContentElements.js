import styled from "styled-components";

export const CrewContentWrapper = styled.section`
  padding-top: 13.6rem;
  @media screen and (max-width: 400px) {
    padding-top: 8.8rem;
  }
`;

export const CrewContenInnertWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;

  @media screen and (max-width: 945px) {
    grid-template-columns: 1fr;
    min-height: 112.9rem;
  }

  @media screen and (max-width: 768px) {
    min-height: unset;
  }
`;

export const CrewContentColLeft = styled.div`
  min-height: 68.8rem;
  position: relative;

  @media screen and (max-width: 945px) {
    min-height: 36.5rem;
    padding-bottom: 4rem;
  }

  @media screen and (max-width: 430px) {
    position: relative;
    padding-bottom: 0;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      top: 0;
      background: hsl(231deg 3% 35%);
      z-index: 1;
    }
  }

  @media screen and (max-width: 375px) {
    min-height: 34.8rem;
  }
`;

export const CrewContentColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 70rem;

  @media screen and (max-width: 945px) {
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    min-height: 53.2rem;
    position: relative;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%);

    @media screen and (max-width: 430px) {
      grid-row: 1/2;
      margin-top: 3.2rem;
    }

    @media screen and (max-width: 375px) {
      min-height: 22.3rem;
    }

    &.douglas {
      max-width: 410px;

      @media screen and (max-width: 375px) {
        max-width: 16rem;
      }
    }

    &.mark {
      max-width: 350px;

      @media screen and (max-width: 375px) {
        max-width: 14rem;
      }
    }
    &.victor {
      max-width: 43.3rem;

      @media screen and (max-width: 375px) {
        max-width: 18rem;
      }
    }
    &.anousheh {
      max-width: 500px;

      @media screen and (max-width: 375px) {
        max-width: 21rem;
      }
    }
  }
`;

export const CrewContentPersonInfoBox = styled.div`
  margin-top: 15.4rem;

  @media screen and (max-width: 1000px) {
    margin-top: 8rem;
  }

  @media screen and (max-width: 945px) {
    margin-top: 6rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 430px) {
    margin-top: 7.4rem;
  }
`;

export const CrewContentDotsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 94px;
  left: 0;
  transform: translateX(-12px);

  @media screen and (max-width: 945px) {
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 430px) {
    bottom: unset;
    top: 32px;
  }
`;

export const CrewContentDot = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background: var(--color-white);
  opacity: 0.17;
  border-radius: 50%;
  margin: 0 1.2rem;
  transition: opacity var(--transition);
  cursor: pointer;
  border: none;

  @media screen and (max-width: 768px) {
    width: 1rem;
    height: 1rem;
    margin: 0 0.8rem;
  }

  &.active {
    opacity: 1;

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    opacity: 0.5;
  }
`;
