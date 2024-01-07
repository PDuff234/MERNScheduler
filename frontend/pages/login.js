// frontend/pages/login.js

import React, { useState } from 'react';
import Link from 'next/link';
import './login.css'; 

//Authentication
import { useRouter } from 'next/router';
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
    
        const { username, password } = event.target;
    
        // Find the user in the database
        const user = await User.findOne({ email: email.value });

        // Check and handle if user exists
        if (!user)
        {
            throw 'User not found'; 
        }
    
        if (user && await bcrypt.compare(password.value, user.password)) {
            // Passwords match
            const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET_KEY);
    
            // Save the JWT in local storage
            localStorage.setItem('token', token);
    
            // Check user role and navigate to the corresponding page
            if (user.role === 'admin') {
                router.push('/admin-user');
            } else if (user.role === 'advanced') {
                router.push('/advanced-user');
            }
        } else {
            // Passwords don't match or user doesn't exist
            console.log('Invalid username or password');
        }
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

            <div className="navigate-to-admin">
                <Link href="/admin-user" passHref>
                    <button className="navigate-button">Administrative User Page</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;
