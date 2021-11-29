import './Admin.css';
import { useState } from 'react';
import { SignInLogo, SignUpItem } from './SignUp';

export function Admin(props) {

    const [authCorrect, setAuthCorrect] = useState(false);

    function handleSubmit(e) {

        const password = e.target.value;

        if (password === 'troop570admin') { // Yes, I know you can see the password
            setAuthCorrect(true);
        }
    }

    return (
        <main className="admin">
            { authCorrect ? <AdminMain /> : <AdminAuth onSubmit={handleSubmit} /> }
        </main>
    );
}

function AdminAuth(props) {
    return (
        <section className="admin-auth">
            <form className="admin-auth-form">
                <SignInLogo />
                <SignUpItem type="password" long={true} onChange={props.onSubmit}>Administrator password</SignUpItem>
            </form>
        </section>
    );
}

function AdminMain(props) {
    return (
        <section className="admin-main">
            <h1 className="admin-section-title">Manage Campouts</h1>
            <div className="admin-campouts">
                <nav className="admin-campout-controls">
                    <button>Add Campout</button>
                </nav>
                <div className="admin-campout-table"></div>
            </div>
        </section>
    );
}