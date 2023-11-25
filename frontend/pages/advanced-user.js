// frontend/pages/advanced-user.js

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AdvancedUserPage = () => {
    const [availability, setAvailability] = useState({
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false
    });

    // Function to toggle availability for a day
    const toggleDayAvailability = (day) => {
        setAvailability(prev => ({ ...prev, [day]: !prev[day] }));
    };

    // Function to check if a date should be disabled
    const isDateUnavailable = (date) => {
        const day = date.getDay(); // 0 is Sunday, 1 is Monday, etc.

        // Disable weekends
        if (day === 0 || day === 6) {
            return true;
        }
        
        const weekdayMapping = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return !availability[weekdayMapping[day]];
    };

    const formatWeekdayName = (locale, date) => {
        const weekdayNames = [
            'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'
        ];
        return weekdayNames[date.getDay()];
    };

    const handleSubmitAvailability = async () => {
        // Here you would send the availability data to the backend
        console.log('Submitting availability:', availability);
        // POST request to the backend with the availability
    };

    return (
        <div className="calendar-container">
            <h1>Set Your Availability</h1>
            <div>
                {Object.keys(availability).map(day => (
                    <label key={day}>
                        <input
                            type="checkbox"
                            checked={availability[day]}
                            onChange={() => toggleDayAvailability(day)}
                        />
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                    </label>
                ))}
            </div>
            <Calendar
                tileDisabled={({ date }) => isDateUnavailable(date)}
                formatShortWeekday={(locale, date) => formatWeekdayName(locale, date)}
                locale='en-US'
            />
            <button onClick={handleSubmitAvailability}>Submit Availability</button>
        </div>
    );
};

export default AdvancedUserPage;
