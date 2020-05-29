import React from 'react';
import { LayoutContainer, NavContainer, LogoContainer } from './Layout.styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Messenger from '../messenger/Messenger.component';
import Profile from '../profile/Profile.component';

const Layout = () => {
  return (
    <Router>
      <LayoutContainer>
        <NavContainer>
          <LogoContainer to='/' />
          <ul>
            <li>
              <Link to='/'>Messenger</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </ul>
        </NavContainer>

        <Switch>
          <Route exact path='/' component={Messenger}></Route>
          <Route path='/profile' component={Profile}></Route>
        </Switch>
      </LayoutContainer>
    </Router>
  );
};

export default Layout;
