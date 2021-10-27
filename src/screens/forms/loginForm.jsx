import React, {useState, useEffect} from 'react';
import '../../screens/login.css'
import {Link,useParams,useLocation,useHistory} from 'react-router-dom'
import TextInputField from '../../components/textInputField';
import {validator} from '../../utils/validator'
import {Form,Select} from 'react-bootstrap'
import api from '../../API'
import RadioBtnField from '../../components/radioBtnField'
import SelectReact from 'react-select'
import MultiSelectField from '../../components/multiSelect'
import FormSelectField from '../../components/formSelectField';

const LoginForm = () => {
    const history = useHistory();
    const {type,id} = useParams()
    const location = useLocation();
    const user = location.state
    const [data, setData] = useState({
        email: "",
        password: "",
        remember: false,
    })
    const [errors, setErrors] = useState({})
    const handleChange = (target) => {
        if (String(target.value).toLowerCase() === "true") {
            target.value = true
        }
        if (String(target.value).toLowerCase() === "false") {
            target.value = false
        }
        if (typeof target.value === 'boolean') { //check box remember
            target.value = !target.value
        }
        target && setData(prevState => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const funcRedirect = (url) => {
        history.push(url)// <Link to={`/users/${id}`}>
    }
    const helloSubmit = () => {
        console.log('err',errors)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('errors',errors)

        //const isValid = validate()
        const [isValidSubmit , isEditValid] = validate()
        // setData(prevState => ({
        //     ...prevState,
        //     qualities: qualitiesUpdated,
        // }))
        setData(data)

        if (isEditValid) { //if true then no errors on submit
            api.users.update(id,data)
                .then(data => console.log('data updated on local storage',data),
                    //console.log('data updated',JSON.parse(localStorage.getItem("users")).find((user) => user._id === id,))
                )
            //funcRedirect(`/users/${id}`)
        }
        if (isValidSubmit) {
            console.log('login submit valid', isValidSubmit)
            funcRedirect(`/users`)
        }
        //funcRedirect()
        // if (!isValid) {
        //     console.log("is submit valid",isValid)
        //     return;
        // }
    }
    useEffect(() => {
        //console.log('data changed effect', data)
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
        password2: {
            isRequired: {
                message: "password cannot be empty",
            },
            isEqualToPassword: {
                message: "passwords are not equal",
                compareTo: data.password,
                compareFrom: data.password2,
            },
        },
        profession: {
            isRequired: {
                message: "profession cannot be empty",
            },
        },
        sex: {
            isRequired: {
                message: "choose your gender",
            },
        },
        qualitie: {
            isRequired: {
                message: "choose at least one qualitie",
            },
        },
        name: {
            isRequired: {
                message: "name cannot be empty",
            },
        },
    }
    const validate = () => {
        const errors = validator(data,validatorConfig)
        console.log('errors',errors)
        setErrors(errors)
        console.log('Object.keys(errors).length',Object.keys(errors).length)
        const isValidSubmit = errors && (Object.keys(errors).length === 0)
        const isEditValid = errors && (Object.keys(errors).length === 2)
        return ([isValidSubmit, isEditValid])
    }

    return (
          <div className="auth-wrapper">
        <div className="auth-inner">

        <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        {/* Email Address Field */}
        <TextInputField
            label="Email address"
            type="email"
            name="email"
            defaultValue={user && user.email}
            onChange={handleChange}
            placeholder="Enter email"
            //parentClassName="form-group"
            //className="form-control"
            id="email"
            error={errors && Object.keys(errors).length !== 0 && errors.email}
        />
        {/* Password Field */}
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
        {/* Form Check Remember Me */}
                <div className="form-group mt-2">
                <div className="custom-control custom-checkbox">
                    {/* <input type="checkbox" className="custom-control-input" id="customCheck1" /> */}
                    <Form.Check
                        className="custom-control-input"
                        inline
                        label="Remember me"
                        name="remember"
                        type="checkbox"
                        id="customCheck1"
                        onChange={(e) => handleChange({name: "remember",value: (e.target.value)})}
                        value={data.remember}
                        checked={data.remember}
                    />
                    {/* <label className="custom-control-label" htmlFor="customCheck1">Remember me</label> */}
                </div>
            </div>
        {/* Submit Button */}
            {/* <Link to={errors ? "#" : `users/`}> */}
                <button
                    onClick={() => helloSubmit}
                    type="submit"
                    className="btn btn-primary btn-block login-btn"
                    disabled={false}
                    //disabled={!(errors === null)}
                    >Submit
                </button>
            {/* </Link> */}

         <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
        {/* Toggle SignUp to SignIn */}
                <p className="forgot-password text-right">
                {"Not registered? "}
                <Link
                    onClick={() => {}}
                    to={"/register"}>
                {"sign up"}
                </Link>
            </p>

    </form>

    </div>
    </div>
    );
};

export default LoginForm;
