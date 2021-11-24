import styled from "styled-components";

export const ImageEl = styled.img`
  &.logo {
    @media screen and (max-width: 400px) {
      max-width: 4rem;
    }
  }

  &.douglas {
    @media screen and (max-width: 768px) {
      position: absolute;
      top: 0;
    }
  }
  
  &.douglas {
    @media screen and (max-width: 430px) {
      top: unset;
      bottom: 0;
    }
  }
`;
