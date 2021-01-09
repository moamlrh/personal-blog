import { Drawer } from "@material-ui/core";
import { Close, Facebook, Search, Twitter } from "@material-ui/icons";
import React from "react";

export const MenuDrawer = ({ open, setOpen }) => {
  return (
    <Drawer
      className={`drawer ${open ? "open-drawer" : "close-drawer"}`}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <div className="drawer-content">
        <div className="menu">
          <h3>HOME</h3>
          <h3>GEAR</h3>
          <h3>PEOPLE</h3>
          <h3>Photography</h3>
          <div className="social-media">
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export const NavbarMenuMobile = ({
  openInput,
  setOpenInput,
  open,
  setOpen,
}) => {
  return (
    <div className={`mobile-menu ${open ? "open-menu" : "close-menu"}`}>
      <div className="menu">
        <h3>HOME</h3>
        <h3>GEAR</h3>
        <h3>PEOPLE</h3>
        <h3>Photography</h3>
        <div className="social-media">
          <Facebook />
          <Twitter />
        </div>
        <div className="menu-search">
          <div className={`search-input`}>
            <input type="text" placeholder="Search Here .." />
            <Search className="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SearchInput = ({ openInput, setOpenInput }) => {
  return (
    <div className={`search-input ${openInput ? "open-input" : "close-input"}`}>
      <input type="text" placeholder="Search Here .." />
      <Search className="search-icon" />
      <Close className="close-icon" onClick={() => setOpenInput(false)} />
    </div>
  );
};

export const CheckIfNavbarMove = (navbarSticky, setNavbarSticky) => {
  window.addEventListener("scroll", () => {
    alert(4);
    if (document.documentElement.scrollTop > 10) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  });
};
