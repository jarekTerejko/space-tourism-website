import styled from "styled-components";

export const HeadingThree = styled.h3`
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 5.6rem;
  line-height: 64px;
  text-transform: uppercase;
  margin-bottom: ${({ roleHeading }) => (roleHeading ? "2.7rem" : "")};
`;
