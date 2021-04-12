import React from 'react';
import logo from './img/logo-on-dark.svg';
import google from './img/google-icon.svg';

function Login() {
    return (
        <div className="App login">
            <img
            className="login__logo" 
            src={logo} 
            alt="meet up logo"/>
            <h1>Welcome to the Meet Up App</h1>
            <h4>Login to see upcoming events around the world for full-stack developers</h4>
            <div className="google-button">
                <img 
                    className="google-icon"
                    src={google}
                    alt="google sign-in" />
                <a 
                    href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=15987595925-ec16dg09j77ve8uo5q72i8012ii9eg5l.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdeveke.github.io%2Fmeet-app%2F"
                    rel="nofollow noopener">Sign In with Google
                </a>
            </div>
            <a href="https://deveke.github.io/meet-app/privacy.html"
                rel="nofollow noopener">
                Privacy Policy
            </a>
        </div>
    )
}

export default Login;