import React from 'react';
import {mount} from 'react-mounter';
import {App} from './app.js';
import { Index } from './index.js';
FlowRouter.route("/",{
  action(){
    mount(App,{
      content:(<Index/>)
    });
  }
});