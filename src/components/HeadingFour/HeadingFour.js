import styled from "styled-components";

export const HeadingFour = styled.h4`
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 37px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: ${({ roleHeading }) => (roleHeading ? "rgba(255, 255, 255, .5)" : "")};
`;
