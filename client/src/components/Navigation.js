import React from 'react';
// Packages
import { useRoutes, A } from 'hookrouter';
// Components
import routes from './routes/reactRouter';
import NoPageFound from './NoPageFound';
// Styling
import './styling/navigation.css';

function Navigation() {
  const routeResult = useRoutes(routes)

  return (
    <div>
      <div className='anchors'>
        <A href='/'>INDEX</A>
        <A href='Chat'>CHAT</A>
      </div>
      <div>
        {routeResult || <NoPageFound />}
      </div>
    </div>
  )
}

export default Navigation;
