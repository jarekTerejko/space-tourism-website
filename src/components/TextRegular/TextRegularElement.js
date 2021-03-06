import styled from "styled-components";

export const TextRegular = styled.p`
  font-size: 1.8rem;
  line-height: 28.5px;
  letter-spacing: 1.3px;
  max-width: 43rem;
  color: var(--color-light-violet);
  margin: ${({ destinationPageText }) =>
    destinationPageText ? "0 0 5.4rem 0" : ""};

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 850px) {
    margin: ${({ homepageText }) => (homepageText ? "0 auto" : "")};
    max-width: ${({ homepageText }) => (homepageText ? "44rem" : "")};
    font-size: ${({ homepageText }) => (homepageText ? "1.6rem" : "")};
  }

  @media screen and (max-width: 560px) {
    font-size: ${({ homepageText }) => (homepageText ? "1.5rem" : "")};
  }

  @media screen and (max-width: 768px) {
    max-width: ${({ destinationPageText }) =>
      destinationPageText ? "57.3rem" : ""};
    line-height: 28px;
    margin-bottom: 4.9rem;
  }

  @media screen and (max-width: 375px) {
    min-height: ${({ destinationPageText }) =>
      destinationPageText ? "12.5rem" : ""};
   margin-bottom: ${({ destinationPageText }) =>
      destinationPageText ? "3.2rem" : ""};
  }
  
  @media screen and (max-width: 945px) {
    max-width: ${({ crewPageText }) => (crewPageText ? "60rem" : "")};
    font-size: ${({ crewPageText }) => (crewPageText ? "1.6rem" : "")};
  }

  @media screen and (max-width: 375px) {
    font-size: ${({ crewPageText }) => (crewPageText ? "1.5rem" : "")};
    line-height: ${({ crewPageText }) => (crewPageText ? "2.5rem" : "")};
  }

  @media screen and (max-width: 375px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;
