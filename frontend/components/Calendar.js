"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarStyles.css';

function CalendarComponent() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        major: ''
    });

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setIsFormVisible(true);
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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare the data to be sent
        const scheduleData = {
            fullName: formData.fullName,
            email: formData.email,
            major: formData.major,
            date: selectedDate
        };
    
        try {
            // POST request to server endpoint
            const response = await fetch('http://localhost:5000/api/schedules', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(scheduleData)
            });
    
            if (!response.ok) {
                throw new Error(`Status: ${response.status}`);
            }
    
            // Handle the response data
            const data = await response.json();
            console.log(data);
    
            // Optionally, you might want to reset the form or redirect the user
        } catch (error) {
            console.error('Failed to submit the schedule:', error);
            // Handle the error (show user feedback, etc.)
        }
        setIsFormVisible(false);
    };

    return (
        <div className="calendar-container">

        <div className="login-button-container">
            <Link href="/login" passHref>
                <button className="login-button">Login</button>
            </Link>
        </div>

        <Calendar 
            onClickDay={handleDateSelect} 
            tileDisabled={isWeekend}
            formatShortWeekday={(locale, date) => formatWeekdayName(locale, date)}
            locale='en-US'
        />

        {isFormVisible && (
            <div className="form-popup">
            <h3>Schedule a tour for {selectedDate.toLocaleDateString()}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                </div>
                <div>
                <label>Intended Major:</label>
                <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleInputChange}
                />
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        )}
        </div>
    );
}

export default CalendarComponent;
