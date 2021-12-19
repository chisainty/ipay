import { useState } from "react";
const Header = () => {
  return (
    <header className="header">
    <div className="container">
      <div className="logo">
        <img src="images/logo/iPay.png" width={110} alt="" />
      </div>
      <div className="menu d-md-none">
        <img src="images/icons/menu.png" height={20} alt="" />
      </div>
      <div className="showcase d-md-flex">
        <div className="list">
          <ul className="d-md-flex mt-2 mb-0">
            <li className="mx-md-4">
              <a href="#">Save</a>
            </li>
            <li className="mx-md-4">
              <a href="#">Invest</a>
            </li>
            <li className="mx-md-4">
              <a href="#">Loan</a>
            </li>
            <li className="mx-md-4">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="btns">
          <a href="#" className="btn btn-outline btn-primary">Log In</a>
          <a href="#" className="btn btn-primary ml-4"> Sign Up, It's Free</a>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
