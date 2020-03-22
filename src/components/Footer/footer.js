import React from 'react';
import './Footer.css';
import $, {scrollY} from 'jquery';

class Footer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pos_y: 0,
            height: 0,
            all_height: 0,
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e)=>{
        let footer = $("#footer");
        let all_h = $("#height");
        this.state.height = parseInt(footer.css("height"));
        // console.log(this.state.height);
        // console.log(this.state.all_height-window.scrollY-(window.innerHeight));
        this.state.all_height = parseInt(all_h.css("height"));
        if((this.state.all_height - window.scrollY-(window.innerHeight)) >= this.state.height){
            footer.css("bottom", ("-"+this.state.height+"px"));
            console.log("-"+this.state.height);
        }else if((this.state.all_height - window.scrollY-(window.innerHeight)) < this.state.height){
            footer.css("bottom", "0");
        }
    }

    render(){
        return (
            <div id="footer">
                <div id="wrapper">
                    {/* <div id="content">
                    </div> */}
                    <footer>
                        <div id="site_title">
                            <p>LeVans © 2020</p>
                            <hr/>
                        </div>
                        <div id="web_links">
                            <div class="web_link">
                                <a href="#">
                                    <img src="media\img\footer\vk.png" alt=""/>
                                </a>
                            </div>
                            <div class="web_link">
                                <a href="#">
                                    <img src="media\img\footer\telegram.png" alt=""/>
                                </a>
                            </div>
                            <div class="web_link">
                                <a href="#">
                                    <img src="media\img\footer\reddi.png" alt=""/>
                                </a>
                            </div>
                            <div class="web_link">
                                <a href="#">
                                    <img src="media\img\footer\facebook.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Footer