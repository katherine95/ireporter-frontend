import React from 'react';

function Navbar() {
    return (
        <div>
            <nav>
            <ul>
                <li><a href="index.html" class="logo">iReporter</a></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="signup.html">Register</a></li>
                <li><a href="index.html">Login</a></li>
                <li><a href="index.html" id="logout">Logout</a></li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;