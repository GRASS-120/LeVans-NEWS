import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';

let STATE = {
    MainPageDATA: {
        TopNews: [],
        News: [],
        Ad: []
    },

}

const Site = () => {
    return (
        <div id='page'>
            <NavBar/>
            <MainPage MainPageDATA={STATE.MainPageDATA}/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<Site />, document.getElementById('root'));
serviceWorker.unregister();
