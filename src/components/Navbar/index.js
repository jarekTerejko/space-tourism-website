import React, { useEffect, useState } from "react";

import {
  NavbarWrapper,
  NavbarInnerWrapper,
  NavbarSiteLinkR,
  NavbarMenuBtn,
  NavbarNavItems,
  NavbarNavItem,
  NavbarNavLinkR,
} from "./NavbarElements";
import Logo from "../../assets/shared/logo.svg";
import Bars from "../../assets/shared/icon-hamburger.svg";
import X from "../../assets/shared/icon-close.svg";
import { ImageEl } from "../Image/ImageElement";
import { ContainerElement } from "../Container/ContainerElement";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledNav, setScrolledNav] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    if (window.scrollY > 100) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const closeMenu = () => {
    if (isOpen) {
      handleMenu();
    } else {
      return;
    }
  };

  const linkPaths = ["/", "destination", "crew", "technology"];

  return (
    <NavbarWrapper className={scrolledNav ? "scrolled-nav" : ""}>
      <ContainerElement>
        <NavbarInnerWrapper>
          <NavbarSiteLinkR to="/" onClick={closeMenu}>
            <ImageEl className="logo" src={Logo} alt="Logo" />
          </NavbarSiteLinkR>
          <NavbarMenuBtn onClick={handleMenu}>
            <ImageEl
              src={isOpen ? `${X}` : `${Bars}`}
              alt={isOpen ? "Close Menu" : "Open Menu"}
            />
          </NavbarMenuBtn>
          <NavbarNavItems isOpen={isOpen}>
            {linkPaths.map((link, i) => {
              return (
                <NavbarNavItem key={i}>
                  <NavbarNavLinkR to={link} onClick={closeMenu} exact={true}>
                    <span className="counter">{`0${i}`}</span>
                    <span>{i === 0 ? "home" : link}</span>
                  </NavbarNavLinkR>
                </NavbarNavItem>
              );
            })}
          </NavbarNavItems>
        </NavbarInnerWrapper>
      </ContainerElement>
    </NavbarWrapper>
  );
};

export default Navbar;
