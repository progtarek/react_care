import styled from 'styled-components';
import { Link } from 'react-router-dom';
import careLogo from '../../assets/img/logo.png';
import * as COLOR_PALLETTE from '../../shared/styles/variables';

export const LayoutContainer = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  background-color: ${COLOR_PALLETTE.PRIMARY_COLOR};
  width: 80px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoContainer = styled(Link)`
  background-image: url(${careLogo});
  width: 43px;
  height: 47px;
  display: block;
  cursor: pointer;
`;
