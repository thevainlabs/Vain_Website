import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #131313;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: left;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  font-family: "Sulphur Point", sans-serif;

  &:hover {
    color: #f85439;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarRoute = styled(LinkR)`
  background: #f85439;
  white-space: nowrap;
  padding: 7px 36px;
  color: #fff;
  font-size: 1.4rem;
  outline: 1px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;
  font-family: "Sulphur Point", sans-serif;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f85439;
  }
`;
