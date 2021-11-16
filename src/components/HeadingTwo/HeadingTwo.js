import styled from "styled-components";

export const HeadingTwo = styled.h2`
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 10rem;
  line-height: 11.5rem;
  text-transform: uppercase;
  margin-bottom: 1.4rem;

  @media screen and (max-width: 1150px) {
    font-size: 8rem;
    line-height: 92px;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 5.6rem;
    line-height: 6.4rem;
  }
`;
