import React from 'react';
import './Header.css';
import $, {scrollY} from 'jquery';
import {sY, search_pos, pos_y} from './scroll_header';

class NavBar extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         sY: 312,
    //         search_pos: 0,
    //         pos_y: 0
    //     }
    // }

    search_click(e) {
        if(pos_y == 0){
            if(search_pos == 0){
                $("#search").css("width", "29.53em");
                $("#search_icon").css("right", "33.23em");
                $("#search_icon").css("transform", "rotate(-360deg)");
                $("#search_input").css("opacity", "1");
                $("#search_input").css("width", "15.4em");
                search_pos = 1;
            }else{
                $("#search").css("width", "5.89em");
                $("#search_icon").css("right", "9.59em");
                $("#search_icon").css("transform", "rotate(0deg)");
                $("#search_input").css("opacity", "0");
                $("#search_input").css("width", "4em");
                search_pos = 0;
            }
        }else{
            if(search_pos == 0){
                $("#search").css("width", "27.53em");
                $("#search_icon").css("right", "34.92em");
                $("#search_icon").css("transform", "rotate(-360deg)");
                $("#search_input").css("opacity", "1");
                $("#search_input").css("width", "15.4em");
                search_pos = 1;
            }else{
                $("#search").css("width", "3.5em");
                $("#search_icon").css("right", "10.675em");
                $("#search_icon").css("transform", "rotate(0deg)");
                $("#search_input").css("opacity", "0");
                $("#search_input").css("width", "3em");
                search_pos = 0;
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
                    <div id="icon"></div>
                    <img src="media\img\header\search.png" alt="" id="search_icon" onClick={this.search_click.bind(this)}/>
                    <div id="search">
                        <input type="text" id="search_input"/>
                    </div>
                </div>
                <div id="height">

                </div>
            </div>
        );
    }
}

export default NavBar