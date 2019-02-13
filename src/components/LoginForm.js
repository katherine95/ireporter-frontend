import React from 'react';
import '../App.css';

export const LoginForm = (state, handleChange, handleSubmit) => {
    const { value, rememberMe} = state;
    return (
        <form onSubmit={handleSubmit} className="form">
            <label>
                Name:
                <input type="text" name="name" value={value} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={value} onChange={handleChange} />
            </label>
            <br />
            <label>
                <input name="rememberMe" type="checkbox" checked={rememberMe} onChange={handleChange} />Remember Me
            </label>
            <br />
            <button type="submit" value="Submit">Log In</button>
            <br />
            <br />
            <p>Create an account?</p><br /><button type="submit" value="Submit">Sign Up</button>
        </form>
    );
}