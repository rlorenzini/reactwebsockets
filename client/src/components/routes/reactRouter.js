import React from 'react';
// Components
import Index from '../Index';
import Chat from '../Chat';

const routes = {
  '/': () => <Index />,
  '/Chat': () => <Chat />,

}

export default routes;
