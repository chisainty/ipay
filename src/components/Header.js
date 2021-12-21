import { useState } from "react";
import { Container } from "./styles/utils/Container.styled";
import { StyledHeader, Nav, Menu, Showcase } from "./styles/Header.styled";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropDownDisplay, setDropDownDisplay] = useState("none");

  const updateMenuStatus = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setDropDownDisplay("block");
    } else {
      setMenuOpen(true);
      setDropDownDisplay("none");
    }
  };

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <div>
            <img src="images/logo/iPay.png" width={110} alt="" />
          </div>
          <Menu onClick={updateMenuStatus}>
            <img src="images/icons/menu.png" height={20} alt="" />
          </Menu>
          <Showcase display={dropDownDisplay}>
            <div>
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
          </Showcase>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
