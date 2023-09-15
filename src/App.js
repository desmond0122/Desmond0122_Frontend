import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import { UrlProvider } from './components/URLContext'

import './App.css'
/*
"scripts": {
    "start": "react-scripts start",//--openssl-legacy-provider start",
        "build": "react-scripts build",// --openssl-legacy-provider build",
            "test": "react-scripts test",
                "eject": "react-scripts eject"
},
*/
export default function App() {
    const baseURL = "https://urchin-app-zb7p4.ondigitalocean.app";

    return (
        <UrlProvider value={baseURL}>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/forget-password" component={ForgetPasswordPage} />
                        <Route path="/home" component={HomePage} />
                    </Switch>
                    <Footer />
                </div>
            </Router >
        </UrlProvider>

    )
}

const Footer = () => {
    return (
        <p className="text-center" style={FooterStyle}>version 1.0
            {/* <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer">IZEMSPOT</a> */}
        </p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}