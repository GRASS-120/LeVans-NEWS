import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import TopNews from './components/TopNews/TopNews';
import News from './components/News/News';


function App() {
  return (
    <div id="wrapper">
      <Header/>
      <TopNews/>
      <News/>
    </div>
  );
}

export default App;