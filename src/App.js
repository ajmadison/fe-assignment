import React from 'react';
import './App.scss';
import {PageHeader, FilterNavigation, AppliancePackages} from './components';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <FilterNavigation />
      <AppliancePackages />
    </div>
  );
}

export default App;
