import React from 'react';
import { Link } from 'react-router-dom';
import AppNavigator from './AppRoutes';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Elim Site</h1>
      <div className="provitional-menu">
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <Link to="/general">General</Link>
        <Link to="/multimedia">Multimedia</Link>
        <Link to="/donations">Donations</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/common">Common</Link>
      </div>

      <React.Suspense fallback={<div>Loading...</div>}>
        <AppNavigator />
      </React.Suspense>
    </div>
  );
}

export default App;
