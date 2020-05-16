import React, { useEffect } from 'react';
import AppNavigator from './AppRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Spin } from 'antd';

function App(props) {
  const { hideLoader } = props;
  useEffect(() => hideLoader(), [hideLoader]);
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

export default App;
