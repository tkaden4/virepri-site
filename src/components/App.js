import React from "react";
import "particles.js";

import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";

import "./app.sass";

import config from "./ps-config.json"

export class App extends React.Component {
    componentDidMount() {
        particlesJS("particles-js", config);
    }
    render() {
        return <div className="app">
            <div id="particles-js"></div>
            <div id="splash-info">
                <Profile />
                <Skills />
            </div>
            <div id="footer">
                Made with
                &nbsp;
                <span id="heart">
                    ❤
                </span>
                &nbsp; by &nbsp;
                <a id="name" href="https://www.tkaden.net" target="_blank">
                    Kaden Thomas
                </a>
            </div>
        </div>;
    }
}

export default App;