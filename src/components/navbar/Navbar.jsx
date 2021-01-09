import { Close, Menu, Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { MenuDrawer, NavbarMenuMobile, SearchInput } from "./nav-funcs";
import "./Navbar.scss";

const Navbar = ({ open, setOpen }) => {
  const [openInput, setOpenInput] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 10) {
        setNavbarSticky(true);
      } else {
        setNavbarSticky(false);
      }
    });
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className={`navbar ${navbarSticky && "navbar-sticky"}`}>
      {width > 800 && (
        <>
          <SearchInput openInput={openInput} setOpenInput={setOpenInput} />
          <div className="search">
            <Search
              className="search-icon"
              onClick={() => setOpenInput(true)}
            />
          </div>
        </>
      )}
      <div className="logo">
        <h3>Blog</h3>
      </div>
      <div className="menu">
        {open ? (
          <Close className="menu-icon" onClick={() => setOpen(false)} />
        ) : (
          <Menu className="menu-icon" onClick={() => setOpen(true)} />
        )}
        {width > 800 ? (
          <MenuDrawer open={open} setOpen={setOpen} />
        ) : (
          <NavbarMenuMobile open={open} setOpen={setOpen}  openInput={openInput} setOpenInput={setOpenInput}/>
        )}
      </div>
    </div>
  );
};

export default Navbar;
