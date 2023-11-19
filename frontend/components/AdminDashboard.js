import React from 'react';
import Link from 'next/link';

const Calendar = () => {
  // Calendar logic goes here

  return (
    <div>
      <h1>Welcome to the Calendar</h1>
      {/* Calendar UI component */}
      {/* Link to other pages if needed */}
      <Link href="/user-dashboard">User Dashboard</Link>
      <Link href="/admin-dashboard">Admin Dashboard</Link>
    </div>
  );
};

export default Calendar;
