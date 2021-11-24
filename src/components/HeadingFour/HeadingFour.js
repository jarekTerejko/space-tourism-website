import styled from "styled-components";

export const HeadingFour = styled.h4`
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 37px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: ${({ roleHeading }) => (roleHeading ? "rgba(255, 255, 255, .5)" : "")};

  @media screen and (max-width: 945px) {
    font-size: ${({ roleHeading }) => (roleHeading ? "2.4rem" : "")};
    line-height: ${({ roleHeading }) => (roleHeading ? "2.8rem" : "")};
    margin-bottom: ${({ roleHeading }) => (roleHeading ? ".8rem" : "")};
  }
  @media screen and (max-width: 430px) {
    font-size: ${({ roleHeading }) => (roleHeading ? "1.6rem" : "")};
    line-height: ${({ roleHeading }) => (roleHeading ? "1.8rem" : "")};
  }
`;
