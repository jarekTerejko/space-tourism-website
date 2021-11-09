import styled from "styled-components";

export const ContainerElement = styled.div`
  max-width: ${(props) => (props.wider ? "132rem" : "115rem")};
  padding: 0 2rem;
  margin: 0 auto;
`;
