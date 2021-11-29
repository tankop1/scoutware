import './SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as EyeIcon } from './assets/eye.svg';
import { ReactComponent as EyeSlashIcon } from './assets/blind.svg';

import firebase from 'firebase/app';
import { auth } from './App';

export function SignUp(props) {
    return (
        <main className="sign-up">
            <form className="sign-up-container">
                <SignInLogo />
                <SignUpForm />
            </form>
        </main>
    );
}

export function SignInLogo() {
    return (
      <Link to="/" className="sign-up-logo"><h1>SCOUTWARE</h1></Link>
    );
}

export function signUpWithGoogle(e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    setTimeout(() => console.log(auth.currentUser), 10000);
}

export function SignUpItem(props) {

    const [passwordVisible, setPasswordVisible] = useState(false);

    function changeVisibility(e) {
        e.preventDefault();
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className={props.long ? "sign-up-item long" : "sign-up-item short"}>
            <input autoComplete="none" type={props.type === 'password' ? passwordVisible ? 'text' : 'password' : props.type} className={props.type === 'email' ? "sign-up-input sign-up-email" : "sign-up-input"} placeholder={props.children} onChange={props.onChange && props.onChange} />
            {props.type === 'password' && <button className="password-button" onClick={changeVisibility}>{passwordVisible ? <EyeSlashIcon /> : <EyeIcon />}</button>}
        </div>
    );
}

function SignUpForm(props) {

    return (
        <section className="sign-up-form">
            <div className="name-fields">
                <SignUpItem type="text">First</SignUpItem>
                <SignUpItem type="text">Last</SignUpItem>
            </div>
            <SignUpItem type="email" long={true}>Email</SignUpItem>
            <SignUpItem type="password" long={true}>Password</SignUpItem>
            <div className="submit-fields">
                <button className="sign-up-submit">Sign Up</button>
                <button className="sign-up-submit google-submit" onClick={signUpWithGoogle}>Sign Up With Google</button>
            </div>
            <p className="to-login">Already have an account? Click <Link to="/"><span className="link-to-login">here</span></Link> to login.</p>
        </section>
    );
}