import React from 'react';
import { Component } from 'react'
import hit01 from '../assists/hit01.png';


export default class Content extends Component{
  render(){
  return (
    <div className="Content">
     {/* <div id="grad1">
       <div class="leCon">
         <div class="proLef">
           <p>AMP UP</p>
           <p>THOSE DBS</p>
           <p>Make Music on the go</p>
           <div class="cirH"><p class="texCen1">HIT IT</p></div>
         </div>
       </div>
       <div class="riCon">
         <div class="proRig">
           <div class="GlBox"></div>
           <div class="GlBox"></div>
           <div class="GlBox"></div>
           <div class="GlBox"></div>
           <div class="GlBox"></div>
           <div class="GlBox"></div>
         </div>
     </div>
    </div> */}
    <div id="grad1" class="jumbotron text-white text-uppercase">
    <div class="row">

<div class="col-md-5 mt-md-0 mt-3">
    <h1 class="pl-4">AMP UP</h1>
           <h1 class="pl-4">THOSE DBS</h1>
           <p>Make Music on the go</p>
           
           <img src={hit01} width="100"/>
</div>
<div class="col-md-7 mt-md-0 mt-3">
<div class="proRig">
<div class="GlBox"></div>
           <div class="GlBox"></div>
           <div class="GlBox"></div>
           <div class="GlBox"></div>
           <div class="GlBox"></div>
           <div class="GlBox"></div>
           </div>
</div>
</div>
</div>
    
    <div class="jumbotron bg-white text-uppercase">
    <h1>Get Producin with musicdb</h1>
        <p>Pick your prefered instrument</p>
        <p>Pick the instuments you need to compose your piece</p>
        <p class="text-danger">Start Composing</p>
</div>

    </div>
  );
}
}


