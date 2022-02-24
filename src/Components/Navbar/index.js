import react from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";
import logo from "../../Images/Vain-t.png";
console.log(logo);
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="work">Work</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blogs">Blogs</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/schedulemeet">Schedule Meet</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
