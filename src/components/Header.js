import { useState } from "react";
import { Container } from "./styles/utils/Container.styled";
import { StyledHeader } from "./styles/Header.styled";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownDisplay, setDropDownDisplay] = useState("d-none");

  const updateMenuStatus = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setDropDownDisplay("");
    } else {
      setMenuOpen(true);
      setDropDownDisplay("d-none");
    }
  };

  return (
    <StyledHeader>
      <Container>
        <div>
          <div className="logo">
            <img src="images/logo/iPay.png" width={110} alt="" />
          </div>
          <div className="menu d-md-none" onClick={updateMenuStatus}>
            <img src="images/icons/menu.png" height={20} alt="" />
          </div>
          <div className={"showcase " + dropDownDisplay + " d-md-flex"}>
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
              <a href="#" className="btn btn-outline btn-primary">
                Log In
              </a>
              <a href="#" className="btn btn-primary ml-4">
                {" "}
                Sign Up, It's Free
              </a>
            </div>
          </div>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
