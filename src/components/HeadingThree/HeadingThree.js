import styled from "styled-components";

export const HeadingThree = styled.h3`
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 5.6rem;
  line-height: 64px;
  text-transform: uppercase;
  margin-bottom: ${({ roleHeading }) => (roleHeading ? "2.7rem" : "")};
  font-size: 40px;
  line-height: 46px;

  @media screen and (max-width: 945px) {
    font-size: ${({ roleHeading }) => (roleHeading ? "4rem" : "")};
    line-height: ${({ roleHeading }) => (roleHeading ? "46px" : "")};
    margin-bottom: ${({ roleHeading }) => (roleHeading ? "1.6rem" : "")};
  }
  @media screen and (max-width: 430px) {
    font-size: ${({ roleHeading }) => (roleHeading ? "2.4rem" : "")};
    line-height: ${({ roleHeading }) => (roleHeading ? "2.8rem" : "")};
  }
`;
