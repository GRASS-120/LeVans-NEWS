import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';

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
            <App/>
        </div>
    )
}

ReactDOM.render(<Site />, document.getElementById('root'));
serviceWorker.unregister();
