import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faBacteria } from "@fortawesome/free-solid-svg-icons";

import CIcon from "@coreui/icons-react";
import {logoNegative} from "../assets/icons/logo-negative";
import {sygnet} from "../assets/icons/sygnet";
import { freeSet } from '@coreui/icons'

// sidebar nav config
import navigation from "./_nav";
import Logo from "./a.svg"
const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        {/* <img src={Logo} width="200px" height="50px" alt="jdfk"/> */}
        <CIcon
          className="c-sidebar-brand-full"
          content={logoNegative}
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          content={sygnet}
          height={35}
        />
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        {/* <img src="logo.gif" alt="Logo" width="200px" height="50px"/> */}
        {/* <FontAwesomeIcon icon={faBacteria} /> */}
        {/* <h5>Sample TypeScript Template</h5> */}
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
