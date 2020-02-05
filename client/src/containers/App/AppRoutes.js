import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const AppNavigator = () => {
  return (
    <div className="router">
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default AppNavigator;
