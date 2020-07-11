import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import fbIcon from './assets/images/facebook-icon.png';
import scIcon from './assets/images/snapchat-icon.png';
import twIcon from './assets/images/twitter-icon.png';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BioPage from './pages/BioPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      activeNav: 'home'
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(showNav, activeNav) {
    if (activeNav != this.state.activeNav) {
      window.scrollTo({
        top: 0
      });
    }

    this.setState({
      showNav: showNav,
      activeNav: activeNav
    });
  }

  componentDidMount() {
    this.setState({
      activeNav: window.location.pathname.slice(1)
    });
  }

  componentWillMount() {
    this.setState({
      activeNav: window.location.pathname.slice(1)
    });
  }

  render() {
    return (
      <HashRouter basename = "/">
        <div className = "wrapper">

          <Route path = "/" exact render = {() => <HomePage />} />
          <Route path = "/about" exact render = {() => <AboutPage />} />
          <Route path = "/bio" exact render = {() => <BioPage />} />
          <Route path = "/work" exact render = {() => <WorkPage />} />
          <Route path = "/contact" exact render = {() => <ContactPage />} />

          <header className = "primary">
            <nav>
              <span className = "heading"><Link className = "nav-link" to = "/">JHN</Link></span>

              <ul className = {this.state.showNav ? "nav-buttons links show" : "nav-buttons links"}>
                <li><Link className = {this.state.activeNav == "home" || this.state.activeNav == "" ? "nav-link active" : "nav-link"} to = "/" onClick = {() => this.toggleNav(false, "home")}>HOME</Link></li>
                <li><Link className = {this.state.activeNav == "about" ? "nav-link active" : "nav-link"} to = "/about" onClick = {() => this.toggleNav(false, "about")}>ABOUT</Link></li>
                <li><Link className = {this.state.activeNav == "bio" ? "nav-link active" : "nav-link"} to = "/bio" onClick = {() => this.toggleNav(false, "bio")}>BIO</Link></li>
                <li><Link className = {this.state.activeNav == "work" ? "nav-link active" : "nav-link"} to = "/work" onClick = {() => this.toggleNav(false, "work")}>WORK</Link></li>
                <li><Link className = {this.state.activeNav == "contact" ? "nav-link active" : "nav-link"} to = "/contact" onClick = {() => this.toggleNav(false, "contact")}>CONTACT</Link></li>
              </ul>
              
              <a className = {this.state.showNav ? "menu-icon active" : "menu-icon"} onClick = {() => this.toggleNav(!this.state.showNav, this.state.activeNav)}>
                  <div className = "menu-icon-div"></div>
                  <div className = "menu-icon-div"></div>
                  <div className = "menu-icon-div"></div>
              </a>
            </nav>
          </header>

          <footer className = "primary">
            <section className = "main">
              <article>
                <header>
                  <span className = "heading"><Link className = "nav-link" to = "/">Jonathan Harrison Neves</Link></span>
                </header>

                <div className = "content">
                  <span className = "links">
                    <Link className = "nav-link" to = "/" onClick = {() => this.toggleNav(false, "home")}>Home</Link>
                    <Link className = "nav-link" to = "/about" onClick = {() => this.toggleNav(false, "about")}>About</Link>
                    <Link className = "nav-link" to = "/bio" onClick = {() => this.toggleNav(false, "bio")}>Bio</Link>
                    <Link className = "nav-link" to = "/work" onClick = {() => this.toggleNav(false, "work")}>Work</Link>
                    <Link className = "nav-link" to = "/contact" onClick = {() => this.toggleNav(false, "contact")}>Contact</Link>
                  </span>

                  <span className = "links">
                    <a className = "icon facebook" href = "https://www.facebook.com/jonathan.neves.771" target = "_blank"><img src = {fbIcon} width = "20px"/></a>
                    <a className = "icon twitter" href = "https://openclipart.org/image/2400px/svg_to_png/130795/Trollface.png" target = "_blank"><img src = {twIcon} width = "20px"/></a>
                    <a className = "icon snapchat" href = "https://openclipart.org/image/2400px/svg_to_png/130795/Trollface.png" target = "_blank"><img src = {scIcon} width = "20px"/></a>
                  </span>
                </div>
                    
                <footer>
                    <span>{'\u00A9'} JHN Co. | All Rights Reserved</span><br />
                    <span>BTW this page is a joke...</span>
                </footer>
              </article>
            </section>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
