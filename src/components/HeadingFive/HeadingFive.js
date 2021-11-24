import styled from "styled-components";

export const HeadingFive = styled.h5`
  font-family: var(--font-family-sans);
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 3.4rem;
  letter-spacing: 0.4725rem;
  text-transform: uppercase;
  padding-top: ${({ crewHeading }) => (crewHeading ? "6.4rem" : "")};

  span.counter {
    color: rgba(255, 255, 255, 0.25);
    display: inline-block;
    margin-right: 2.8rem;

    @media screen and (max-width: 400px) {
      margin-right: 1.8rem;
    }
  }

  @media screen and (max-width: 1150px) {
    font-size: 2rem;
    letter-spacing: 3.375px;
  }
  @media screen and (max-width: 768px) {
    padding-top: ${({ crewHeading }) => (crewHeading ? "0" : "")};
  }

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
    line-height: 1.9rem;
    letter-spacing: 2.7px;
    text-align: center;
  }
`;
