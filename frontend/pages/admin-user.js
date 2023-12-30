// frontend/pages/admin-user.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './pages.css'; 

const AdminUserPage = () => {
    const [advancedUsers, setAdvancedUsers] = useState([]);
    const [tours, setTours] = useState([]);

    useEffect(() => {
        // Fetch and set advanced user schedules and tour schedules
        // fetchAdvancedUsers();
        // fetchTours();
    }, []);

    // Component to display tour schedules for basic users
    const BasicUserSchedules = () => {
        const [tours, setTours] = useState([]);

        useEffect(() => {
            // Fetch and set tour schedules
            // fetchTours();
        }, []);

        return (
            <div className="tour-schedules">
                {/* Display basic user tour schedules */}
            </div>
        );
    };

    // Component for creating an advanced user
    const CreateUserForm = () => {
        const [userName, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleCreateUser = async (event) => {
            event.preventDefault();
    
            try {
                // Create a new advanced user in MongoDB
                const response = await fetch('http://localhost:5000/api/users/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: userName,
                        email,
                        role: "advanced",
                        password
                    })
                });
    
                if (response.ok) {
                    // User created successfully
                    console.log('Advanced user created!');
                    // Reset the form inputs
                    setUserName('');
                    setEmail('');
                    setPassword('');
                } else {
                    // Error creating user
                    console.error('Failed to create advanced user');
                }
            } catch (error) {
                console.error('An error occurred while creating advanced user:', error);
            }
        };

        return (
            <form>
                {/* Username, Email, Password inputs and Submit button */}
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="navigate-button" onClick={handleCreateUser}>Create Advanced User</button>
            </form>
        );
    };


    // Function to determine if a tile should be disabled
    const isWeekend = ({ date }) => {
        const day = date.getDay(); 
        return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
    };

    const formatWeekdayName = (locale, date) => {
        const weekdayNames = [
          'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'
        ];
        return weekdayNames[date.getDay()];
    };

    return (
        <div className="calendar-container">
            <div className="advanced-users-sidebar">
                {/* List advanced users here */}
                {advancedUsers.map(user => (
                    <div key={user.id}>{user.name}</div>
                ))}
            </div>

            <Calendar
                tileDisabled={isWeekend}
                formatShortWeekday={(locale, date) => formatWeekdayName(locale, date)}
                locale='en-US'
            />

            <div className="main-content">
                <CreateUserForm />

                <div className="tour-schedules">
                    {/* Display basic user tour schedules */}
                </div>
            </div>

        </div>
    );
};

export default AdminUserPage;
