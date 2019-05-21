import React from 'react';
import logo from './logo.svg';
import './App.css';
import BandListContainer from './containers/BandListContainer'
import NewBandContainer from './containers/NewBandContainer'
import BandTotalContainer from './containers/BandTotalContainer'

function App() {
  return (
    <div className="App">
    <h2>A reminder of the bands you've seen</h2>
      <NewBandContainer/>
      <BandTotalContainer/>
      <BandListContainer/>
    </div>

  );
}

export default App;
