import React from 'react'
import './Footer.css'

class Footer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render(){
        return (
            <div id="footer">
                <div id="wrapper">
                    <div id="content">
                    </div>
                    <footer>
                        <div id="site_title">
                            <p>LeVans © 2020</p>
                            <hr/>
                        </div>
                        <div id="web_links">
                            <div class="web_link">
                                <a href="#">
                                    <img src="./vk.png" alt=""/>
                                </a>
                            </div>
                            <div class="web_link">
                                <a href="#">
                                    <img src="./telegram.png" alt=""/>
                                </a>
                            </div>
                            <div class="web_link">
                                <a href="#">
                                    <img src="./reddi.png" alt=""/>
                                </a>
                            </div>
                            <div class="web_link">
                                <a href="#">
                                    <img src="./facebook.png" alt=""/>
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