import React from 'react';
// Packages
import { useRoutes, A } from 'hookrouter';
// Components
import routes from './routes/reactRouter';
import NoPageFound from './NoPageFound';
// Styling


function Navigation() {
  const routeResult = useRoutes(routes)

  return (
    <div>
      <div>
        <A href='/'>INDEX</A>
      </div>
      <div>
        {routeResult || <NoPageFound />}
      </div>
    </div>
  )
}

export default Navigation;
