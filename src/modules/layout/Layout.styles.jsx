import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import careLogo from '../../assets/img/logo.png';
import logoutIcon from '../../assets/img/nav/logout.png';
import profileIcon from '../../assets/img/nav/profile.png';
import settingsIcon from '../../assets/img/nav/settings.png';
import messengerIcon from '../../assets/img/nav/messenger.png';
import * as COLOR_PALLETTE from '../../shared/styles/variables';

const MessengerNavIconStyle = css`
  background-image: url('${messengerIcon}');
  background-size: cover;
  width: 40px;
  height: 36px;
`;

const ProfileNavIconStyle = css`
  background-image: url('${profileIcon}');
  background-size: cover;
  width: 24px;
  height: 30px;
`;

const SettingsNavIconStyle = css`
  background-image: url('${settingsIcon}');
  background-size: cover;
  width: 32px;
  height: 33px;
`;

const LogoutNavIconStyle = css`
  background-image: url('${logoutIcon}');
  background-size: cover;
  width: 35px;
  height: 29px;
`;

const mapPropsToNavIcons = (icon) => {
  switch (icon) {
    case 'messenger':
      return MessengerNavIconStyle;
    case 'profile':
      return ProfileNavIconStyle;
    case 'settings':
      return SettingsNavIconStyle;
    default:
      return LogoutNavIconStyle;
  }
};

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  background-color: ${COLOR_PALLETTE.PRIMARY_COLOR};
  width: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoContainer = styled(Link)`
  background-image: url(${careLogo});
  width: 43px;
  height: 47px;
  cursor: pointer;
  margin-top: 24px;
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1 0;
  width: 100%;
  margin-top: 22px;
  list-style: none;
  align-items: center;
  flex-direction: column;
  li {
    width: 100%;
    height: 80px;
    transition: 0.5s all;

    &:hover {
      background-color: ${COLOR_PALLETTE.PRIMARY_COLOR_HOVER};
    }
  }
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.${({ activeClassName }) => activeClassName} {
    background-color: ${COLOR_PALLETTE.PRIMARY_COLOR_HOVER};
  }
`;

export const NavIcon = styled.div`
  ${({ icon }) => mapPropsToNavIcons(icon)}
`;

export const LogoutContainer = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  cursor: pointer;
`;
