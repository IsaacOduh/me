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
                  <a href="https://www.github.com/isaacoduh/">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.twitter.com/isaacoduh/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
            </div>
          </section>

          <hr className="m-0"/>

          <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
              <h2 className="mb-5">Experience</h2>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Software Developer </h3>
                  <div className="subheading mb-3">Freelance </div>
                  <p>Designed and built varied degrees of fullstack applications for clients.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">September 2016 </span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Software Developer - Intern </h3>
                  <div className="subheading mb-3">Pear SDC </div>
                  <p>Worked under the supervision of Senior developers in developing a variety of software products. Also had to wear the fullstack hat.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">June 2017 - August 2017</span>
                </div>
              </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">Software Engineer </h3>
                  <div className="subheading mb-3">Orishirishi.org </div>
                  <p> Designed and Developed the platform for the Startup.</p>
                  <p> Developed in-house software for strategic business activities including a Customer Relations Management platform for customer interactions.</p>
                  <p> Served as C.T.O which involved technical and managerial roles. Interfaced between software team and board members in breaking down expectations.</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">April 2016 - September 2016</span>
                </div>
              </div>

            </div>
          </section>

          <hr className="m-0"/>

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
              <h2 className="mb-5">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                    <h3 className="mb-0">Covenant University</h3>
                    <div className="subheading mb-3">Masters of Engineering</div>
                    <div>Computer Engineering - (Software Engineering and Cloud Computing)</div>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">2016 - 2018</span>
                  </div>
                </div>

              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                    <h3 className="mb-0">Covenant University</h3>
                    <div className="subheading mb-3">Bachelor of Engineering</div>
                    <div>Computer Engineering</div>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary">September 2009 - May 2014</span>
                  </div>
                </div>

            </div>
          </section>

          <hr className="m-0"/>

          <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">Programming Languages</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-python"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-js"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-php"></i>
                </li>
              </ul>

              <br/>

            <div className="subheading mb-3">Fullstack Competencies - (Frontend &amp; Backend)</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-node"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-laravel"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-react"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-vuejs"></i>
                </li>
              </ul>

              <br/>

              <div className="subheading mb-3">DevTools</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item">
                  <i className="fab fa-git"></i>
                </li>
                <li className="list-inline-item">
                  <i className="fab fa-linux"></i>
                </li>
              </ul>

              <br/>

              <div class="subheading mb-3">Other Competencies</div>
              <ul class="fa-ul mb-0">
                <li>
                  <i class="fa-li fa fa-check"></i>
                  Data Science - Pandas, Matplotlib</li>
                <li>
                  <i class="fa-li fa fa-check"></i>
                  Testing - Unit &amp; Integration</li>
                <li>
                  <i class="fa-li fa fa-check"></i>
                  Progressive Web Apps </li>
                <li>
                  <i class="fa-li fa fa-check"></i>
                  Databases - MySql, Postgres, MongoDB </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
