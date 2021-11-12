import styled from "styled-components";

export const HeadingOne = styled.h1`
  font-size: 15rem;
  text-transform: uppercase;
  font-weight: 400;

  span.intro {
    font-size: 2.8rem;
    letter-spacing: 4.75px;
    color: var(--color-light-violet);
    display: block;
    margin-bottom: 2.4rem;

    @media screen and (max-width: 570px) {
      font-size: 1.6rem;
    }
  }
  
  span.heading {
    display: block;
    font-family: var(--font-family-serif);
    margin-bottom: 2.4rem;

    @media screen and (max-width: 570px) {
      font-size: 8rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 5rem;
    }
  }
`;
