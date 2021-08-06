import './LogIn.css';
import { SignInLogo, SignUpItem, signUpWithGoogle } from './SignUp';
import { Link } from 'react-router-dom';

export function LogIn(props) {
    return (
        <main className="log-in">
            <form className="log-in-container">
                <SignInLogo />
                <LogInForm />
            </form>
        </main>
    );
}

function LogInForm(props) {

    return (
        <section className="login-form">
            <SignUpItem type="email" long={true}>Email</SignUpItem>
            <SignUpItem type="password" long={true}>Password</SignUpItem>
            <div className="submit-fields">
                <button className="login-submit">Sign In</button>
                <button className="login-submit google-submit" onClick={signUpWithGoogle}>Sign In With Google</button>
            </div>
            <p className="to-signup">Don't have an account? Click <Link to="/signup"><span className="link-to-signup">here</span></Link> to register.</p>
        </section>
    );
}