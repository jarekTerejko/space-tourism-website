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

  &.technology-portrait {
    position: absolute;
    right: 0;
    top: 272px;

    @media screen and (max-width: 1180px) {
      position: static;
      margin-top: 13.7rem;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &.technology-landscape {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      left: 0;
      top: 220px;
    }

    @media screen and (max-width: 375px) {
      top: 139px;
    }
  }
`;
