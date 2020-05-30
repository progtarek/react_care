import React from 'react';
import Messenger from '../messenger/Messenger.component';
import Settings from '../settings/Settings.component';
import Profile from '../profile/Profile.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  LogoutContainer,
  LayoutContainer,
  LogoContainer,
  NavContainer,
  NavItem,
  NavList,
  NavIcon,
} from './Layout.styles';

const Layout = () => {
  return (
    <Router>
      <LayoutContainer>
        <NavContainer>
          <LogoContainer to='/' />
          <NavList>
            <li>
              <NavItem to='/messenger' activeClassName='active'>
                <NavIcon icon='messenger' />
              </NavItem>
            </li>
            <li>
              <NavItem to='/profile' activeClassName='active'>
                <NavIcon icon='profile' />
              </NavItem>
            </li>
            <li>
              <NavItem to='/settings' activeClassName='active'>
                <NavIcon icon='settings' />
              </NavItem>
            </li>
            <LogoutContainer>
              <NavIcon icon='logout' />
            </LogoutContainer>
          </NavList>
        </NavContainer>

        <Switch>
          <Route exact path='/'>
            <Redirect to='/messenger' />
          </Route>
          <Route exact path='/messenger' component={Messenger}></Route>
          <Route exact path='/profile' component={Profile}></Route>
          <Route exact path='/settings' component={Settings}></Route>
        </Switch>
      </LayoutContainer>
    </Router>
  );
};

export default Layout;
