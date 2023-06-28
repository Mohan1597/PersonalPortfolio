import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import fbicon from './../assets/img/nav-icon1.svg'
import instaicon from './../assets/img/nav-icon2.svg'
import twittericon from './../assets/img/nav-icon3.svg'

const NavigatioBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Skills</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                    </li>
                </ul>
                <ul class="navbar-social">
                <li class="nav-item">
                    <img src={fbicon}/>
                    </li>
                    <li class="nav-item">
                    <img src={instaicon}/>
                    </li>
                    <li class="nav-item">
                    <img src={twittericon}/>
                    </li>
                </ul>
                <button className="letsconnect">
                        Lets Connect
                </button>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default NavigatioBar