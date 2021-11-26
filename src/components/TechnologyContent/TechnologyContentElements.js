import styled from "styled-components";

export const TechnologyContentWrapper = styled.section`
  position: relative;
  padding-top: 21.2rem;
`;

export const TechnologyContentInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 80px;
  min-height: 527px;
`;

export const TechnologyContentCircleBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 13.7rem;
`;

export const TechnologyContentCircleBtn = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: none;
  font-family: var(--font-family-serif);
  font-style: normal;
  font-weight: normal;
  font-size: 3.2rem;
  line-height: 8rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: var(--transition);
  background: none;
  color: var(--color-white);
  cursor: pointer;
  margin-bottom: 3.2rem;

  &.active {
    background: var(--color-white);
    color: var(--color-dark);
  }

  &:hover {
    border-color: var(--color-white);
  }
`;

export const TechnologyContentColDescription = styled.div`
  margin-top: 13.7rem;
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
