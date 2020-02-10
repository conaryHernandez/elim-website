import React from 'react';
import AppNavigator from './AppRoutes';
import Header from '../../components/layout/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <React.Suspense fallback={<div>Loading...</div>}>
        <AppNavigator />
      </React.Suspense>

      <Footer />
    </div>
  );
}

export default App;
