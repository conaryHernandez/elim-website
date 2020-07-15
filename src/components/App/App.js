import React, { useEffect } from 'react';
import AppNavigator from './AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Spin } from 'antd';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

function App(props) {
  const { hideLoader } = props;
  useEffect(() => hideLoader(), [hideLoader]);

  useEffect(() => {
    ReactGA.initialize('UA-171677704-1');
    // To Report Page View
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <div className="App">
      <Header />

      <React.Suspense
        fallback={
          <div className="txt-center">
            <Spin size="large" />
          </div>
        }
      >
        <AppNavigator />
      </React.Suspense>

      <Footer />
    </div>
  );
}

export default withRouter(App);
