import React from 'react';
import './TopNews.css'

class TopNews extends React.Component {
    render(){
        return (
            <div id='top_news_block' class='main_page_item'>

                <div class='top_news_item'>
                    <div class='top_news_content'>
                        <img src='https://sun9-9.userapi.com/c855536/v855536777/7cfe/tYl_hv_PwMY.jpg'></img>
                    </div>

                    <div class='top_news_display'>
                        <p class='top_news_title'>Lorem ipsum dolor sit amet. 💜🙀</p><hr/>
                    </div>
                </div>

                <div class='top_news_block_item'>
                    <div class='top_news_content'>
                        <img src='https://cdn22.img.ria.ru/images/7e4/2/1/1564134619_0:2:3000:1690_600x0_80_0_0_9b0af28be1be2b76d43424f4c43a75e6.jpg'></img>
                    </div>

                    <div class='top_news_display'>
                    <p class='top_news_title'>Lorem ipsum dolor sit amet. 🌏⛩️</p><hr/>
                    </div>
                </div>

                <div class='top_news_block_item'>
                    <div class='top_news_content'>
                        <img src='https://psv4.userapi.com/c834504/u269771693/docs/d4/4cb8632948a1/papich_dance.gif?extra=zD7QwPMfRMsOW09TQWQraNrbym7YcsKIJ0xZ3zuTryPllWWOaXA1aRvbaqwrzxPNRXEvprvLzrh3yX9N8-n1vMcIxbwQouyMnnkPoojm9GbZazyrlU2GhCpaJNDfkMeyhUe7eheahIpl591lG_P2udY'></img>
                    </div>

                    <div class='top_news_display'>
                        <p class='top_news_title'>Lorem ipsum dolor sit amet. 🛡️🎮</p><hr/>
                    </div>
                </div>

            </div>
        )
    }
}

export default TopNews