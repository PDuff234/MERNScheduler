// frontend/pages/login.js

import React, { useState } from 'react';
import Link from 'next/link';
import './login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Implement login logic here
        console.log('Login with:', email, password);
    };

    return (
        <div className="container">
            <div className="navigate-to-calendar">
                <Link href="/" passHref>
                    <button className="navigate-button">Back to Calendar</button>
                </Link>
            </div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>

                <div className="input-box">
                    <input 
                        type="email"
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn">Login</button>
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
