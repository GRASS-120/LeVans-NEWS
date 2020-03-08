import React from 'react';
import './News.css'

class News extends React.Component {
    render(){
        return (
            <div id='news_block' class='main_page_item'>
                <div id='news_items_block'>
                    <div class='news_item'>
                        <div class='news_content'>
                            <img src='https://sun9-9.userapi.com/c855536/v855536777/7cfe/tYl_hv_PwMY.jpg'></img>
                        </div>

                        <div class='news_display'>
                            <p class='news_title'>Lorem ipsum dolor sit amet. 💜🙀</p>
                        </div>  
                    </div>
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