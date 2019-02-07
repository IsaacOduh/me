import React, { Component } from 'react';
import logo from './logo.svg';
import profilephoto from './profile.jpg';
import './resume.css'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Isaac Oduh</span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-cirle mx-auto mb-2" src={profilephoto} alt=""/>
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid p-0">
          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
              <h1 className="mb-0">Isaac <span className="text-primary">Oduh</span></h1>
              <div className="subheading mb-5">Lagos, Nigeria · +(234) 908-134-7924 · <a href="mailto:ufuomaoduh@gmail.com">ufuomaoduh@gmail.com</a> </div>
                <p className="lead mb-5">Hi, I am Isaac. I write software.</p>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/isaac-oduh-50122188/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.github.com/IsaacOduh/">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.twitter.com/isaacoduh/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
            </div>
          </section>

          <hr className="m-0"/>
        </div>
      </div>
    );
  }
}

export default App;
