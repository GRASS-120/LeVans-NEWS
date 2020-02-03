import React from 'react';
import './NavBar.css'

class NavBar extends React.Component {
    render(){
        return (
          <nav class="navbar navbar-expand-lg bg-dark navbar-dark">

            <a class="navbar-brand" href="#">
              <img src='https://sun9-12.userapi.com/c858024/v858024808/16da4b/2BH_6vjYiOQ.jpg' height='40px' id='logo'></img>              
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon">
              </span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">

                <li class="nav-item active">
                  <a class="nav-link" href="#">GAMES 🎮</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">TECHNOLOGIES 💻</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">WORLD 🌎</a>
                </li>

              </ul>

              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search 🔍</button>
              </form>
              
            </div>
          </nav>
        )


    }
}

export default NavBar