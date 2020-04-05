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
            pos_y: 0,
            burger: 0,
        }
    }


    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('DOMContentLoaded', this.loader);
    }
    componentWillUnmount(){
        window.rvwoveEventListener('scroll', this.handleScroll);
    }

    
    handleScroll = (e)=>{
        // let navbar = document.getElvwentById("navbar");
        let navbar = $("#navbar");
        let sY_reserve = (parseInt($("#header-text").css("font-size"))*11);
        console.log(sY_reserve)
        this.state.sY = sY_reserve;
        // console.log(navbar.children());
        if (window.scrollY >= this.state.sY/2) {
            navbar.css("position", "fixed");
            navbar.css("top","0px");
        }
        else{
            navbar.css("position", "absolute");
            navbar.css({
                "top":(this.state.sY-window.scrollY)+"px",
                "height":"8.57vw",
                "transition": "0s",
            });
        }
    
        if(window.scrollY >= this.state.sY/1.5){
            navbar.css({
                "height":"5vw",
                "transition": "0.25s",
            });
            $("#icons").css("right", "-3.9vw");
            $("#aljir").css({
                "width": "4vw",
                "margin-top": "0.5vw",
                "margin-left": "0.5vw",
            });
            // $("#nav_blocks").css({
            //     "margin-top": "-3.3vw",
            //     "margin-left": "4vw"
            // });
            $(".block_navbar").css({
                "top": "0.25vw",
                "width": "6.5vw",
            });
            $("#icon").css({
                "top": "0.5vw",
                "right": "6vw",
                "transition": "0.2s",
                "height": "3.5vw",
                "width": "3.5vw",
            });
            $("#search_icon").css({
                "top": "0.5vw",
                "right": "10vw",
                "transition": "0.2s",
                "height": "3.5vw",
                "width": "3.5vw",
                "transition": "0.2s",
                "transform": "rotate(0deg)",
            });
            $("#search").css({
                "top": "0.5vw",
                "right": "10vw",
                "transition": "0.2s",
                "height": "3.5vw",
                "width": "3.5vw",
                "transition": "0.2s",
            });
            $("#search_input").css({
                "transition": "0.2s",
                "height": "3vw",
                "padding-left": "0.02vw",
                "width": "0.1vw",
                "right": "0vw",
            });
            this.state.pos_y = 1;
            this.state.search_pos = 0;
            setTimeout(() => {
                $("#search_icon").css("transition", "1s");
                $("#search_input").css("transition", "1s");
                $("#search").css("transition", "1s");
                $("#search_input").css("display", "none");
            }, 200);
        }else{
            navbar.css("height","8.57vw");
            $("#icons").css("right", "0vw");
            $("#aljir").css({
                "width": "6vw",
                "margin-top": "1.5vw",
                "margin-left": "2vw",
            });
            // $("#nav_blocks").css({
            //     "margin-top": "-4.5vw",
            //     "margin-left": "6.8vw"
            // });
            $(".block_navbar").css({
                "top": "0.5vw",
                "width": "11vw",
            });
            $("#icon").css({
                "top": "2vw",
                "right": "2vw",
                "height": "4.8vw",
                "width": "4.8vw",
            });
            $("#search_icon").css({
                "top": "2vw",
                "right": "8vw",
                "transition": "0.2s",
                "height": "4.8vw",
                "width": "4.8vw",
                "transform": "rotate(0deg)",
            });
            $("#search").css({
                "top": "2vw",
                "right": "8vw",
                "transition": "0.2s",
                "height": "4.8vw",
                "width": "4.8vw",
            });
            $("#search_input").css({
                "transition": "0.2s",
                "height": "4.3vw",
                "padding-left": "0.1vw",
                "width": "0.3vw",
                "right": "0vw",
            });
            this.state.pos_y = 0;
            this.state.search_pos = 0;
            setTimeout(() => {
                navbar.css("transition","0s");
                $("#search_icon").css("transition", "1s");
                $("#search_input").css("transition", "1s");
                $("#search").css("transition", "1s");
                $("#search_input").css("display", "none");
            }, 200);
        }
    }

    search_click(e) {
        if(this.state.pos_y == 0){
            if(this.state.search_pos == 0){
                $("#search").css("width", "25vw");
                $("#search_icon").css("right", "28.7vw").css("transform", "rotate(-360deg)");
                $("#search_input").css("display", "block");
                setTimeout(() => {
                    $("#search_input").css("opacity", "1");
                    $("#search_input").css("width", "20.5vw");
                }, 1);
                this.state.search_pos = 1;
            }else{
                $("#search").css("width", "4.8vw");
                $("#search_icon").css("right", "8vw");
                $("#search_icon").css("transform", "rotate(0deg)");
                $("#search_input").css("opacity", "0");
                $("#search_input").css("width", "4vw");
                setTimeout(() => {
                    $("#search_input").css("display", "none");
                }, 1000);
                this.state.search_pos = 0;
            }
        }else{
            if(this.state.search_pos == 0){
                $("#search").css("width", "23vw");
                $("#search_icon").css("right", "30.39vw");
                $("#search_icon").css("transform", "rotate(-360deg)");
                $("#search_input").css("display", "block");
                setTimeout(() => {
                    $("#search_input").css("opacity", "1");
                    $("#search_input").css("width", "20vw");
                }, 1);
                this.state.search_pos = 1;
            }else{
                $("#search").css("width", "3.5vw");
                $("#search_icon").css("right", "10.675vw");
                $("#search_icon").css("transform", "rotate(0deg)");
                $("#search_input").css("opacity", "0");
                $("#search_input").css("width", "3vw");
                setTimeout(() => {
                    $("#search_input").css("display", "none");
                }, 1000);
                this.state.search_pos = 0;
            }
        }
    }

    loader(e){
        if(window.innerWidth <= window.innerHeight){
            $(".block_navbar").css("font-size", "1.2em");
            if(window.innerWidth <= window.innerHeight/1.7){
                $(".block_navbar").css({
                    "height": "2vw",
                })
                $("#nav_blocks").css({
                    "width": "11vw",
                    "height": "5vw",
                    "opacity": "0",
                    "margin-top": "-20vw",
                    "top": "-15vw",
                    "font-size": "1em",
                });
                $("#burger").css({
                    "margin-left": "12vw",
                    "display": "block",
                });
            }
        }
    }

    burger(e){
        if(this.state.burger == 0){
            this.state.burger = 1;
            $("#nav_blocks").css({
                "opacity": "1",
                "margin-top": "10vw",
                "top": "0vw",
            });
            $("#burger").css({
                "height": "35vw",
                "width": "18vw",
            });
            $("#burger").css("margin-top", "-33vw");
            $("#aljir").css("margin-top", "-51.5vw");
        }else{
            this.state.burger = 0;
            $("#nav_blocks").css({
                "opacity": "0",
                "margin-top": "-20vw",
                "top": "-15vw",
            });
            $("#burger").css({
                "height": "8vw",
                "width": "8vw",
            });
            $("#burger").css("margin-top", "-7vw");
            $("#aljir").css("margin-top", "1.5vw");
        }
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="container-fluid">
                    <div id="header" className="col">
                        <img src="media\img\header\LOGO.png" alt="LeVans" id="logo"/>
                        <div id="polosa"></div>
                        <div id="header-text" className="col">Новостной портал</div>
                    </div>
                </div>
                <div id="navbar" className="container-fluid">
                    <img src="media\img\header\aljir.png" alt="" id="aljir"/>

                    <div id="nav_blocks" className="container">
                        <div className="block_navbar"> #World</div>
                        <div className="block_navbar"> #Tech</div>
                        <div className="block_navbar"> #Games</div>
                        <div className="block_navbar"> #Music</div>
                    </div>
                    
                    <div id="burger" className="container" onClick={this.burger.bind(this)}>
                        <div id="one_burger" className="col"></div>
                        <div id="two_burger" className="col"></div>
                        <div id="three_burger" className="col"></div>
                    </div>

                    <div id="icons" className="container">
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