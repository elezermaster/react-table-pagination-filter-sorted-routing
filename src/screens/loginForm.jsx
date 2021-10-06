import React, {useState, useEffect} from 'react';
import '../screens/login.css'
import {Link} from 'react-router-dom'
import TextInputField from '../components/textInputField';
import {validator} from '../utils/validator'

const LoginForm = () => {
    const [data, setData] = useState({email: "",password: ""})
    const [errors, setErrors] = useState()
    let isValidSubmit
    const handleChange = (event) => {
        setData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const handleSubmit = e => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log("data",data)
    }
    useEffect(() => {
        //validate()
        return () => {
            //cleanup()
        }
    }, [data])
    const validatorConfig = {
        email: {
            isRequired: {
                message: "email cannot be empty",
            },
            isEmail: {
                message: "email is not correct",
            },
        },
        password: {
            isRequired: {
                message: "password cannot be empty",
            },
            isPasswordHasCapitalSymbol: {
                message: "password must contain at least one capital symbol",
            },
            isPasswordHasAnyDigit: {
                message: "password must contain at least one digit",
            },
            isPasswordHasMinimalLength: {
                message: "password must contain at least 8 chars",
                value: 8,
            },
        },
    }
    const validate = () => {
        const errors = validator(data,validatorConfig)
        // for (const fieldName in data) {
        //     if (data[fieldName].trim() === "") {
        //         errors[fieldName] = `${fieldName} cannot be empty`
        //     }
        // }
        setErrors(errors)
        isValidSubmit = Object.keys(errors).length === 0
        return (isValidSubmit)
    }
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">

        <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <TextInputField
            label="Email address"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter email"
            //parentClassName="form-group"
            //className="form-control"
            id="email"
            error={errors && Object.keys(errors).length !== 0 && errors.email}
        />
        <TextInputField
            label="Password"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter password"
            //parentClassName="form-group"
            //className="form-control"
            id="password"
            error={errors && Object.keys(errors).length !== 0 && errors.password}
        />
        {/* <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                />
        </div> */}

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button
            type="submit"
            className="btn btn-primary btn-block login-btn"
            disabled={false}
            >Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
        <p className="forgot-password text-right">
            Not registered?
            <Link to="/sign-up">
            sign up
            </Link>
        </p>
    </form>

    </div>
    </div>
    );
};

export default LoginForm;
