import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as OtakuLogo } from "../../assets/logo.svg";
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 70px;
  width: 70px;
  margin: 8px;
  background-color: rgb(203, 233, 223);
  border-radius: 9px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OtakuLogoStyled = styled(OtakuLogo)`
  width: 100%;
  height: 100%;]
`;
