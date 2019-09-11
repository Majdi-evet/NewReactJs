import React from 'react';
import { Component } from 'react'
import logo from '../assists/logo.png';
import icon from '../assists/icon.png';

export default class Header extends Component{
  render(){
  return (
    <div className="Header">
    <nav class="navbar navbar-expand-lg navbar-white bg-white">
  <a class="navbar-brand" href="javascript:void(0)"><img src={logo} width="100"/></a>
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navb">
    <ul class="navbar-nav mr-auto">
      
    </ul>
     
        <a class="nav-link text-black">Profile <img src={icon} width="40"/></a>
  </div>
</nav>
    </div>
    
  );
}
}


