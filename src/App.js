import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import TopNews from './components/TopNews/TopNews';
import News from './components/News/News';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div id="wrapper">
      <Header/>
      <TopNews/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;