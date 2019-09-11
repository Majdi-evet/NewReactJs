import React from 'react';
import { Component } from 'react'
import logowhite from '../assists/logo-white.png';

export default class Footer extends Component{
  render(){
  return (
<footer class="Footer page-footer font-small blue pt-4">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-2 mt-md-0 mt-3">

        <h5 class="text-uppercase"><img src={logowhite} width="100"/></h5>

      </div>

      

      <div class="col-md-10 mb-md-0 mb-3">

        

        <ul class="list-unstyled mt-5">
          <li>
          <h6 class="text-uppercase">Profile</h6>
          </li>
          <li>
          <h6 class="text-uppercase">Sign in</h6>
          </li>
          <li>
          <h6 class="text-uppercase">Music</h6>
          </li>
        </ul>

      </div>

    </div>

  </div>

  <div class="row text-left d-flex bg-black text-secondary mt-3">

      <div class="mx-2">
        <h6 class="text-uppercase font-weight-bold">
          Legal
        </h6>
      </div>
      <div class="mx-2">
        <h6 class="text-uppercase font-weight-bold">
          Privacy Center
        </h6>
      </div>
      <div class="mx-2">
        <h6 class="text-uppercase font-weight-bold">
          Privacy Policy
        </h6>
      </div>
      <div class="mx-2">
        <h6 class="text-uppercase font-weight-bold">
          Cookies
        </h6>
      </div>
      <div class="mx-2">
        <h6 class="text-uppercase font-weight-bold">
          About Ads
        </h6>
      </div>
    </div>

</footer>
  );
}
}


