import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import TopNews from './components/TopNews/TopNews';


function App() {
  return (
    <div id="wrapper">
      <Header/>
      <TopNews/>
    </div>
  );
}

export default App;