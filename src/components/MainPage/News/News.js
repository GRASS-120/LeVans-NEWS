import React from 'react';
import './News.css'

class News extends React.Component {
    render(){
        return (
            <div id='news_block' class='main_page_item'>
                <div id='news_items_block'>
                    <div class='news_item'>sass</div>
                    <div class='news_item'>sass</div>
                    <div class='news_item'>sass</div>
                    <div class='news_item'>sass</div>
                    <div class='news_item'>sass</div>
                    <div class='news_item'>sass</div>
                    <div class='news_item'>sass</div>
                    <div class='news_item'>sass</div>
                </div>

                <button id='read_next'>Read more... 🔥 </button>
            </div>
        )
    }
}

export default News