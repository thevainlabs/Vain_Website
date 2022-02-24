import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarBtn,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElement";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="work" onClick={toggle}>
            Work
          </SidebarLink>
          <SidebarLink to="blogs" onClick={toggle}>
            Blogs
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
          <SidebarBtn>
            <SidebarRoute to="/schedulemeet" onClick={toggle}>
              Schedule Meet
            </SidebarRoute>
          </SidebarBtn>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
