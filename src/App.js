import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import GiveConsent from './pages/GiveConsent';
import Consents from './pages/Consents';
import NotFound404 from './pages/NotFound404';
import { GIVE_CONSENTS, CONSENTS } from './utils/routes';

const App = () => (
  <BaseLayout>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to={GIVE_CONSENTS} />
        </Route>
        <Route path={GIVE_CONSENTS} render={GiveConsent} />
        <Route path={CONSENTS} render={Consents} />
        <Route render={NotFound404} />
      </Switch>
    </Router>
  </BaseLayout>
);

export default App;
