import React from 'react';
import './TopNews.css';
import $ from 'jquery';

class TopNews extends React.Component {
    componentDidMount(){
        $("#top_news").css("height", (parseInt($("#top_news").css("width"))/16)*9+"px");
        this.adapt();
    }
    // componentWillUnmount(){
    //     $("#top_news").css("height", (parseInt($("#top_news").css("width"))/16)*9+"px");
    // }

    adapt = () => {
        setInterval(() => {
            $("#top_news").css("height", (parseInt($("#top_news").css("width"))/16)*9+"px");
        }, 1000);
    }

    render(){
        return (
            <div id="all_top_news" className="container-fluid">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div id='top_news'>
                        <div id='title_top_news_block'>
                            <p id="title_top_news">TOP NEWS🔥</p>
                        </div>
                        <div id='top_news_block'>
                        <div class="carousel-inner">
                            <div class="carousel-item active post">
                                    <div class="post_img">
                                        <img src="https://img.rg.ru/img/content/153/10/69/1_d_850.jpg"/>
                                    </div>
                                    <div class="post_display">
                                        <div class="post_display_title">
                                            <p>Аниме убивает подростков!</p>
                                        </div>
                                        <div class="post_display_tag">
                                            <p>#world🌍</p>
                                        </div>
                                        <div class="post_display_short_text">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi autem laborum ducimus accusantium vel numquam cumque eum esse
                                            quos impedit, minima deleniti nam animi debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae modi maiores vitae perspiciatis eius!
                                            Lorem ipsum dolor sit amet.</p>
                                            <button>
                                                <p>Читать далее...</p>
                                            </button>
                                        </div>
                                    </div>
                            </div>
                            <div class="carousel-item post">
                                <div class="post_img">
                                    <img src="media\img\top_news\149959687159620847f228d4.34486523.jpg"/>
                                </div>
                                <div class="post_display">
                                    <div class="post_display_title">
                                        <p>Lorem или Ipsum?</p>
                                    </div>
                                    <div class="post_display_tag">
                                        <p>#world🌍</p>
                                    </div>
                                    <div class="post_display_short_text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi autem laborum ducimus accusantium vel numquam cumque eum esse
                                        quos impedit, minima deleniti nam animi debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae modi maiores vitae perspiciatis eius!
                                        Lorem ipsum dolor sit amet.</p>
                                        <button>
                                            <p>Читать далее...</p>
                                        </button>
                                    </div>
                                </div>
                    
                            </div>
                            <div class="carousel-item post">
                                <div class="post_img">
                                <img src="media\img\top_news\1516121172182195986.jpg"/>
                                </div>
                                <div class="post_display">
                                <div class="post_display_title">
                                    <p>Как выглядят улицы городов во время карантина?</p>
                                </div>
                                <div class="post_display_tag">
                                    <p>#world🌍</p>
                                </div>
                                <div class="post_display_short_text">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi autem laborum ducimus accusantium vel numquam cumque eum esse
                                    quos impedit, minima deleniti nam animi debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae modi maiores vitae perspiciatis eius!
                                    Lorem ipsum dolor sit amet.</p>
                                    <button>
                                        <p>Читать далее...</p>                        
                                    </button>
                                </div>
                                </div>    
                            </div>
                        </div>

                        <a class="carousel-control-prev self_style_button self_style_button_left" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel_contol_self" aria-hidden="true">{"<"}</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next self_style_button self_style_button_right" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel_contol_self" aria-hidden="true">{">"}</span>
                            <span class="sr-only">Next</span>
                        </a>

                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default TopNews