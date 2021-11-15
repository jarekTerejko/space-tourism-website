import styled from "styled-components";

export const PageBg = styled.div`
  min-height: 90rem;
  margin: 0 auto;
  background-image: ${({ homeDesktopBg }) =>
    homeDesktopBg ? `url(${homeDesktopBg})` : `url('')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    background-image: ${({ homeTabletBg }) =>
      homeTabletBg ? `url(${homeTabletBg})` : `url('')`};
    min-height: 102.4rem;
  }
  @media (max-width: 375px) {
    background-image: ${({ homeMobileBg }) =>
      homeMobileBg ? `url(${homeMobileBg})` : `url('')`};
    min-height: 66.7rem;
  }
`;
