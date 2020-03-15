import React from 'react';
import './Header.css';
import $, {scrollY} from 'jquery';
// import {sY, search_pos, pos_y} from './scroll_header';

class NavBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            sY: 312,
            search_pos: 0,
            pos_y: 0
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    
    handleScroll = (e)=>{
        // let navbar = document.getElementById("navbar");
        let navbar = $("#navbar");
        // console.log(navbar.children());
        if (window.scrollY >= this.state.sY/2) {
            navbar.css("position", "fixed");
            navbar.css("top","0px");
        }
        else{
            navbar.css("position", "absolute");
            navbar.css({
                "top":(this.state.sY-window.scrollY)+"px",
                "height":"10.57em",
                "transition": "0s",
            });
        }
    
        if(window.scrollY >= this.state.sY/1.5){
            navbar.css({
                "height":"6.5em",
                "transition": "0.25s",
            });
            $("#icons").css("right", "-3.9em");
            $("#aljir").css({
                "width": "5em",
                "margin-top": "0.6em",
                "margin-left": "0.6em",
            });
            $(".block_navbar").css({
                "top": "0.25em",
                "width": "8vw",
            });
            $("#icon").css({
                "top": "1.2em",
                "right": "6.5em",
                "transition": "0.2s",
                "height": "3.5em",
                "width": "3.5em",
            });
            $("#search_icon").css({
                "top": "1.2em",
                "right": "10.675em",
                "transition": "0.2s",
                "height": "3.5em",
                "width": "3.5em",
                "transition": "0.2s",
                "transform": "rotate(0deg)",
            });
            $("#search").css({
                "top": "1.2em",
                "right": "10.675em",
                "transition": "0.2s",
                "height": "3.5em",
                "width": "3.5em",
                "transition": "0.2s",
            });
            $("#search_input").css({
                "transition": "0.2s",
                "height": "1.9em",
                "padding-left": "0.03em",
                "width": "0.1em",
            });
            this.state.pos_y = 1;
            this.state.search_pos = 0;
            setTimeout(() => {
                $("#search_icon").css("transition", "1s");
                $("#search_input").css("transition", "1s");
                $("#search").css("transition", "1s");
            }, 200);
        }else{
            navbar.css("height","10.57em");
            $("#icons").css("right", "0em");
            $("#aljir").css({
                "width": "7.55em",
                "margin-top": "1.51em",
                "margin-left": "2.57em",
            });
            $(".block_navbar").css({
                "top": "0.5em",
                "width": "11.67vw",
            });
            $("#icon").css({
                "top": "2.34em",
                "right": "2.45em",
                "height": "5.89em",
                "width": "5.89em",
            });
            $("#search_icon").css({
                "top": "2.34em",
                "right": "9.59em",
                "transition": "0.2s",
                "height": "5.89em",
                "width": "5.89em",
                "transform": "rotate(0deg)",
            });
            $("#search").css({
                "top": "2.34em",
                "right": "9.59em",
                "transition": "0.2s",
                "height": "5.89em",
                "width": "5.89em",
            });
            $("#search_input").css({
                "transition": "0.2s",
                "height": "3.8em",
                "padding-left": "0.1em",
                "width": "0.3em",
            });
            this.state.pos_y = 0;
            this.state.search_pos = 0;
            setTimeout(() => {
                navbar.css("transition","0s");
                $("#search_icon").css("transition", "1s");
                $("#search_input").css("transition", "1s");
                $("#search").css("transition", "1s");
            }, 250);
        }
    }

    search_click(e) {
        if(this.state.pos_y == 0){
            if(this.state.search_pos == 0){
                $("#search").css("width", "29.53em");
                $("#search_icon").css("right", "33.23em").css("transform", "rotate(-360deg)");
                $("#search_input").css("opacity", "1").css("width", "15.4em");
                this.state.search_pos = 1;
            }else{
                $("#search").css("width", "5.89em");
                $("#search_icon").css("right", "9.59em");
                $("#search_icon").css("transform", "rotate(0deg)");
                $("#search_input").css("opacity", "0");
                $("#search_input").css("width", "4em");
                this.state.search_pos = 0;
            }
        }else{
            if(this.state.search_pos == 0){
                $("#search").css("width", "27.53em");
                $("#search_icon").css("right", "34.92em");
                $("#search_icon").css("transform", "rotate(-360deg)");
                $("#search_input").css("opacity", "1");
                $("#search_input").css("width", "15.4em");
                this.state.search_pos = 1;
            }else{
                $("#search").css("width", "3.5em");
                $("#search_icon").css("right", "10.675em");
                $("#search_icon").css("transform", "rotate(0deg)");
                $("#search_input").css("opacity", "0");
                $("#search_input").css("width", "3em");
                this.state.search_pos = 0;
            }
        }
    }



    render(){
        return (
            <div>
                <div id="header">
                    <img src="media\img\header\LOGO.png" alt="LeVans" id="logo"/>
                    <div id="polosa"></div>
                    <div id="header-text">Новостной портал</div>
                </div>
                <div id="navbar">
                    <img src="media\img\header\aljir.png" alt="" id="aljir"/>
                    <div className="block_navbar"> #World</div>
                    <div className="block_navbar"> #Tech</div>
                    <div className="block_navbar"> #Games</div>
                    <div className="block_navbar"> #Music</div>
                    <div id="icons">
                        <div id="icon"></div>
                        <img src="media\img\header\search.png" alt="" id="search_icon" onClick={this.search_click.bind(this)}/>
                        <div id="search">
                            <input type="text" id="search_input"/>
                        </div>
                    </div>
                    
                </div>
                <div id="height">

                </div>
            </div>
        );
    }
}

export default NavBar