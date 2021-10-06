import React from 'react';
import '../screens/login.css'
import {Link} from 'react-router-dom'

const signupForm = () => {
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">

        <form>
        <h3>Sign Up</h3>

        <div className="form-group">
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div>

        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
                type="email"
                className="form-control"
                placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary btn-block login-btn">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered
            <Link to="/sign-in">
            sign in?
            </Link>
        </p>
    </form>

    </div>
    </div>
    );
};

export default signupForm;
