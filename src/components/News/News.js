import React from 'react'
import './News.css'

class News extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render(){
        return (
            <div id="news">
                <div id="title_news_block">
                    <p id="title_news">NEWS 📰</p>
                </div>
                <div id="news_block" className='container-fluid'>

                    <div className="col-md-4"><div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                        
                        <div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
            
                        <div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div></div>


                    <div className="col-md-4">
                    <div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
            
                        <div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
            
                        <div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                    <div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
            
                        <div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
            
                        <div class="article">
                            <div class="article_tag">
                                <p>#world</p>
                            </div>
                            <div class="article_img">
                                <img src="./sadas.jpg" alt=""/>
                            </div>
                            <div class="article_display">
                                <p>by Lorem Ipsum</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            <div id="button_block">
                <button>Читать больше</button>
            </div>
        </div>
        )
    }
}

export default News