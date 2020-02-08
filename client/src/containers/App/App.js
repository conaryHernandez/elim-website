import React from "react";
import AppNavigator from "./AppRoutes";
import Header from "../../components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <React.Suspense fallback={<div>Loading...</div>}>
        <AppNavigator />
      </React.Suspense>
    </div>
  );
}

export default App;
