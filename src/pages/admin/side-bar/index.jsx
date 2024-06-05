import "./sidebar.scss";

import { Link, NavLink } from "react-router-dom";
import React, { memo } from "react";

import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";

const SideBar = () => {
  return (
    <section className="sideBar">
      <h1 className="sideBar__title">Admin Dashboard</h1>
      <ul className="sideBar__list">
        <li>
          <NavLink to={"/admin/createProduct"} className="sideBar__link">
            <IoCreateOutline /> <span>Create Product</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/admin/manageProduct"} className="sideBar__link">
            <MdOutlineManageAccounts /> <span>Manage Product</span>
          </NavLink>
        </li>
      </ul>
      <div className="sideBar__bottom">
        <Link className="sideBar__link" to={"/"}>
          Log Out
        </Link>
      </div>
    </section>
  );
};

export default memo(SideBar);
