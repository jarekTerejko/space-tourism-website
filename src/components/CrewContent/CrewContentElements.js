import styled from "styled-components";

export const CrewContentWrapper = styled.section`
  padding-top: 13.6rem;
`;

export const CrewContenInnertWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  padding-top: 6.4rem;
`;

export const CrewContentColLeft = styled.div`
  min-height: 68.8rem;
  position: relative;
`;

export const CrewContentColRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  min-height: 70rem;
`;

export const CrewContentPersonInfoBox = styled.div`
  margin-top: 15.4rem;
`;

export const CrewContentDotsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 94px;
  left: 0;
  transform: translateX(-12px);
`;

export const CrewContentDot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background: var(--color-white);
  opacity: 0.17;
  border-radius: 50%;
  margin: 0 1.2rem;
  transition: opacity var(--transition);
  cursor: pointer;

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
