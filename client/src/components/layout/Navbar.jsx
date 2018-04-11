import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/dantv5.png";
import brand from "../../assets/Gechotext2.png";

export default class Navbar extends Component {
  
  render() {
    // console.log('FROM NAVBAR PROPS: ', this.props);
    const id = this.props.user.creds._id ? this.props.user.creds._id : "profile";

		return (
			<div className={this.props.theme}>
				<nav className="navBar">
          <div className="logo">
            <NavLink className="icon" exact to="/">
              <img src={logo} />
            </NavLink>
            <NavLink className="brand" exact to="/">
              GECHO
            </NavLink>
          </div>

          <div className="hamburger">
            <div className="hamburger-icon" onClick={this.burgerToggle}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
              
            <div className="burger-links">
              <NavLink to="/about" onClick={this.burgerToggle}>About</NavLink>
              {this.props.user.loggedIn ?
                <div>
                  <NavLink to={`/user/${id}`} onClick={this.burgerToggle}>Profile</NavLink>
                  <NavLink to={`/user/${id}/playlists`} onClick={this.burgerToggle}>Playlists</NavLink>
                  <NavLink to={`/user/${id}/saved`} onClick={this.burgerToggle}>Liked Videos</NavLink>
                  <a href="#" onClick={(e) => this.props.handleLogoutUser(e)}>Sign Out</a>
                </div> :
                <div>
                  <NavLink to="/signup" onClick={this.burgerToggle}>Sign Up</NavLink>
                  <NavLink to="/login" onClick={this.burgerToggle}>Log In</NavLink>
                </div>
              }
            </div>
          </div>

          <div className="nav-wrapper">
            <ul className="nav-list">
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
            {this.props.user.loggedIn ? 
              <ul className="login-list">
                <li><a href="#" onClick={(e) => this.props.handleLogoutUser(e)}>Sign Out</a></li>
                <li><NavLink to={`/user/${id}`}>Profile</NavLink></li>
              </ul> : 
              <ul className="login-list">
                <li><NavLink to="/signup" className ="btn">Sign Up</NavLink></li>
                <li><NavLink to="/login">Log In</NavLink></li>
              </ul>
            }
          </div>
        </nav>
			</div>
    );
    
  }
  
  burgerToggle = function () {
    let linksEl = document.querySelector('.burger-links');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
    
  }
}