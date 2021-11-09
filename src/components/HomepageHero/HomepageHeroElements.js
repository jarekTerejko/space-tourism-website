import styled from "styled-components";

export const HomepageHeroWrapper = styled.header`
  padding-top: 38.7rem;
`;
export const HomepageHeroInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const HomepageHeroColLeft = styled.div``;
export const HomepageHeroColRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media screen and (max-width: 1300px) {
    margin: 0 4.4rem 4.4rem 4.4rem;
  }
`;
