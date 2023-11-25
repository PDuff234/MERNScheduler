// frontend/pages/login.js

import React, { useState } from 'react';
import Link from 'next/link';
import './pages.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Implement login logic here
        console.log('Login with:', email, password);
    };

    return (
        <div className="login-container">
            <Link href="/" passHref>
                <button className="back-to-calendar">Back to Calendar</button>
            </Link>

            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>

            <div className="navigate-to-advanced">
                <Link href="/advanced-user" passHref>
                    <button className="navigate-button">Advanced User Page</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;
