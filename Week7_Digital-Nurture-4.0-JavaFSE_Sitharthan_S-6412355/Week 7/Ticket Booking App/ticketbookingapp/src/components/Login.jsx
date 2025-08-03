import { useState } from "react";
import TicketBooking from "./TicketBooking";

function Login({setFlag}){
    function handleLogin() {
        setFlag(false);
    }
    return(
        <div>
            <h2>Welcome Back</h2>
            <button onClick={handleLogin}>Logout</button>
        </div>
    );
}
export default Login;