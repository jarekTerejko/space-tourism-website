import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  transform: translateY(40px);
  transition: transform var(--transition);

  &.scrolled-nav {
    transform: translateY(0);
    background: var(--color-dark);
  }

  @media screen and (max-width: 768px) {
    transform: translateY(0);
  }
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 9.6rem;

  &::before {
    @media screen and (min-width: 1440px) {
      content: "";
      position: absolute;
      left: 0;
      top: 47.5px;
      height: 1px;
      width: 473px;
      background: var(--color-white);
      z-index: 1;
    }
  }

  @media screen and (max-width: 1218px) {
    justify-content: space-between;
  }
`;

export const NavbarSiteLinkR = styled(Link)`
  position: fixed;
  left: 55px;

  @media screen and (max-width: 1218px) {
    position: static;
  }
`;

export const NavbarMenuBtn = styled.button`
  background: none;
  border: none;
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 570px) {
    display: flex;
    transform: translateX(7px);
    position: absolute;
    right: 0;
    z-index: 4;
  }
`;

export const NavbarNavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  transition: var(--transition);
  min-height: 9.6rem;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);

  @media screen and (min-width: 1440px) {
    position: fixed;
    right: 0;
    width: 60.5vw;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    right: 0;
    background: rgba(255, 255, 255, 0.03);
  }
  @media screen and (max-width: 570px) {
    position: absolute;
    transform: ${(props) =>
      props.isOpen ? `translateX(0)` : "translateX(100%)"};
    right: -20px;
    top: 0;
    padding-top: 11.8rem;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    width: 25.4rem;
  }
`;

export const NavbarNavItem = styled.li`
  margin: 0 1.5rem;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

export const NavbarNavLinkR = styled(NavLink)`
  padding: 1rem;
  padding-top: 3.85rem;
  padding-bottom: 3.85rem;
  font-size: 1.6rem;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  color: var(--color-white);
  transition: color var(--transition);
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 10px;
  position: relative;
  transition: var(--transition);

  &.active {
    &::after {
      content: "";
      position: absolute;
      left: 10px;
      bottom: 0;
      height: 2px;
      width: calc(100% - 20px);
      background: var(--color-white);

      @media screen and (max-width: 570px) {
        left: 0;
        width: 4px;
        height: 30px;
        transform: translate(240px, -32px);
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 10px;
    bottom: 0;
    height: 2px;
    width: calc(100% - 20px);
    opacity: 0;
    background: var(--color-white);
    transition: opacity var(--transition);

    @media screen and (max-width: 570px) {
      display: none;
    }
  }

  &:hover::before {
    opacity: 1;
  }

  span.counter {
    font-weight: bold;

    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (max-width: 570px) {
      display: block;
    }
  }
  span.page {
  }
  &:hover {
    color: var(--grey);
  }
  
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    display: inline-block;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    display: inline-block;
  }

  @media screen and (max-width: 570px) {
    display: grid;
  }
`;
