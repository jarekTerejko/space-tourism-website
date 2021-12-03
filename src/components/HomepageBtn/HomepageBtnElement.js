import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomepageBtn = styled(Link)`
  width: 27.4rem;
  height: 27.4rem;
  background: var(--color-white);
  color: var(--color-dark);
  line-height: 274px;
  text-align: center;
  letter-spacing: 2px;
  font-size: 3.2rem;
  text-transform: uppercase;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  transition: opacity var(--transition);

  @media screen and (max-width: 850px) {
    width: 24.2rem;
    height: 24.2rem;
    line-height: 242px;
    font-size: 2rem;
  }

  @media screen and (max-width: 560px) {
    width: 15rem;
    height: 15rem;
    line-height: 150px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -44px;
    left: -44px;
    background: transparent;
    width: calc(100% + 88px);
    height: calc(100% + 88px);
    border: 44px solid hsl(229deg 13% 16%);
    border-radius: 50%;
    z-index: -3;
    opacity: 0;
    transition: opacity var(--transition);

    @media screen and (max-width: 560px) {
      top: -22px;
      left: -22px;
      background: transparent;
      width: calc(100% + 44px);
      height: calc(100% + 44px);
      border: 22px solid hsl(229deg 13% 16%);
    }
  }

  &:hover::before {
    opacity: 1;
  }
`;


// export const 