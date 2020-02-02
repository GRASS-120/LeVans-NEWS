import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let STATE = {

}

const Site = () => {
    return (
        <div id='page'>
            <div id='page-wrap'>
        
            </div>
            <footer>

            </footer>
        </div>
    )
}

ReactDOM.render(<Site />, document.getElementById('root'));
serviceWorker.unregister();
