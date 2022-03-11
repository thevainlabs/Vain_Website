import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border: none;
  background: #f85439;
  color: #fff;
  white-space: nowrap;
  padding: 6px 24px;
  font-size: 36px;
  font-family: "Sulphur Point", sans-serif;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #f85439;
  }
`;
