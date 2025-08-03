import React, { useState } from 'react';
import Login from './Login.jsx';
import SignOut from './SignOut.jsx';
function TicketBooking() {
  const [flag, setFlag] = useState(false);
  return flag ? <Login setFlag={setFlag} /> : <SignOut setFlag={setFlag} />;
}

export default TicketBooking;
