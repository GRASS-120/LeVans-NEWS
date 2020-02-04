import React from 'react';
import TopNews from './TopNews/TopNews';
import './MainPage.css'
import News from './News/News';
import Ad from './Ad/Ad';

class MainPage extends React.Component {
    render(){
        return (
            <div id='main_page'>
                <TopNews/>
                <News/>
                <Ad/>
            </div>
        )
    }
}

export default MainPage