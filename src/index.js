import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import TopNews from './components/TopNews/TopNews';

let STATE = {

}

const Site = () => {
    return (
        <div id='page'>
            <NavBar />
            <TopNews></TopNews>
            <Footer></Footer>
        </div>
    )
}

ReactDOM.render(<Site />, document.getElementById('root'));
serviceWorker.unregister();
