import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
const Home = React.lazy(() => import('../Home/Home'));
const Common = React.lazy(() => import('../Common/Common'));
const History = React.lazy(() => import('../History/History'));
const General = React.lazy(() => import('../General/General'));
const Multimedia = React.lazy(() => import('../Multimedia/Multimedia'));
const Donations = React.lazy(() => import('../Donations/Donations'));
const Contact = React.lazy(() => import('../Contact/Contact'));

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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/common" component={Common} />
          <Route path="/history" component={History} />
          <Route path="/general" component={General} />
          <Route path="/multimedia" component={Multimedia} />
          <Route path="/donations" component={Donations} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default App;
