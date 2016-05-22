import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from './app.js';
//import { Documents } from '../../ui/pages/documents';
import { Index } from './index.js';
import { Login } from './login';


Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="index" path="/index" component={ Index } />
        <Route name="login" path="/login" component={ Login } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
