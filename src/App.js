import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import GiveConsent from './pages/GiveConsent';
import Consents from './pages/Consents';
import NotFound404 from './pages/NotFound404';

const App = () => (
  <BaseLayout>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/give-consent" />
        </Route>
        <Route path="/give-consent" render={GiveConsent} />
        <Route path="/consents" render={Consents} />
        <Route render={NotFound404} />
      </Switch>
    </Router>
  </BaseLayout>
);

export default App;
