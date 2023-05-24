import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
const NavbarSection = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  const [navbar, setNavbar] = useState("navbar");
  const [navwrap, setNavwrap] = useState("nav-wrapper");
  const changeBackground = () => {
    if (window.scrollY >= 0.5) {
      setNavbar("sticky");
      setNavwrap("sticky-nav-wrapper");
    } else {
      setNavbar("navbar");
      setNavwrap("nav-wrapper");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  function handleClick() {
    setMobileNavOpen(!isMobileNavOpen);
    setActive(!isActive);
  }
  return (
    <>
      <div class={navwrap}>
        <nav class={navbar}>
          <Link href="/">
            <img src="/resource/images/notext.png" />
          </Link>
          {/* <div className="color-block"></div> */}
          <div
            class={`menu-toggle ${isActive ? "is-active" : ""}`}
            id="mobile-menu"
            onClick={handleClick}
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class={`nav ${isMobileNavOpen ? "mobile-nav" : ""}`}>
            <li
              class="nav-item"
              style={{ textAlign: "center", marginLeft: "14px" }}
            >
              <Link href="/">HOME</Link>
            </li>
            <li class="nav-item">
              <Link href="/shop">SHOP</Link>
            </li>
            <li class="nav-item">
              <Link href="/services">SERVICES</Link>
            </li>
            <li class="nav-item">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarSection;
