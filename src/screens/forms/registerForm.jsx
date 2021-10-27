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

const RegisterForm = () => {
    const history = useHistory();
    const {type,id} = useParams()
    const location = useLocation();
    const user = location.state
    const [formType, setFormType] = useState(type)//"register" ? "login" ? "edit"
    const [data, setData] = useState({
        email: "",
        password: "",
        password2: "",
        profession: "",
        sex: "",
        qualitie: [],
        remember: false,
        name: "",
    })
    const [errors, setErrors] = useState({})
    const [professions, setProfessions] = useState()
    const [qualitieOptions,setQualitieOptions] = useState({})
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
    const getProfessionById = (id) => {
        let getProfession = null
        professions && Object.keys(professions).forEach(prof => {
            if (professions[prof]._id === id) {
                //console.log('find prof',professions[prof])
                getProfession = professions[prof]
            }
        })
        return getProfession
    }
    const funcRedirect = (url) => {
        history.push(url)// <Link to={`/users/${id}`}>
    }
    const handleSubmit = e => {
        console.log('errors',errors)
        e.preventDefault()
        //const isValid = validate()
        const [isValidSubmit , isEditValid] = validate()
        const professionUpdated = getProfessionById(data.profession)
        data.profession = professionUpdated
        const qualitiesUpdated = data.qualitie.map(q => {
            return {_id: q.value, name: q.label, color: q.color}
        })
        console.log('qualities before submit', qualitiesUpdated)
        // setData(prevState => ({
        //     ...prevState,
        //     qualities: qualitiesUpdated,
        // }))
        data.qualities = qualitiesUpdated
        setData(data)

        if (isEditValid) { //if true then no errors on submit
            api.users.update(id,data)
                .then(data => console.log('data updated on local storage',data),
                    //console.log('data updated',JSON.parse(localStorage.getItem("users")).find((user) => user._id === id,))
                )
            //funcRedirect(`/users/${id}`)
        }
        console.log('login submit valid', isValidSubmit)
        console.log('isValidSubmit',isValidSubmit)
        console.log('errors submit', errors)
        if (isValidSubmit) {
            funcRedirect("/")
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
    useEffect(() => {
        api.professions.fetchAllProfessions()
            .then(data => setProfessions(Object.assign(data,{allProfession: {name: "all professions"} })))
        api.qualities.fetchAllQualities()
            .then(data => setQualitieOptions(data))
        },[])
    useEffect(() => {
        setData(prevState => ({
            ...prevState,
            name: user?.name,
        }))
            console.log('user setted :',user)
        },[user?.name])
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">

        <form onSubmit={handleSubmit}>
        <h3>{"Register"}</h3>
        {/* Name Field */}
        <TextInputField
            label="Name"
            type="name"
            name="name"
            defaultValue={user?.name}
            onChange={handleChange}
            placeholder="Enter name"
            //parentClassName="form-group"
            //className="form-control"
            id="name"
            error={errors && Object.keys(errors).length !== 0 && errors.name}
        />
        {/* Email Field */}
        <TextInputField
            label="Email address"
            type="email"
            name="email"
            defaultValue={user && user?.email}
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
        {/* Second Password Form */}
        <TextInputField
            label="Password Repeat"
            type="password"
            name="password2"
            value={data.password2}
            onChange={handleChange}
            placeholder="Re-enter password"
            //parentClassName="form-group"
            //className="form-control"
            id="password2"
            error={errors && Object.keys(errors).length !== 0 && errors.password2}
        />
        {/* Select Options Form Professions  */}
        <div className="formGroup">
        <label className="mt-2" htmlFor="selectProfession">Choose Profession</label>
        <FormSelectField
            data={data}
            name="profession"
            onChange={handleChange}
            professions={professions}
            selected={user}
        />
        {errors && Object.keys(errors).length !== 0 && errors.profession &&
            <span className="help-block error text-danger">{errors.profession}</span>}
        </div>
        {/* Radio Button Sex */}
        <RadioBtnField
            options={[
                {name: "Male", value: "male"},
                {name: "Female", value: "female"},
                {name: "Other", value: "other"},
            ]}
            name="sex"
            onChange={handleChange}
            value={user?.sex || data.sex}
            label="Choose Gender"
            selected={user && user?.sex}
        >
        </RadioBtnField>
        {errors && Object.keys(errors).length !== 0 && errors.sex &&
            <span className="help-block error text-danger">{errors.sex}</span>}
        {/* Multy Select Qualities */}
            <div className="formGroup">
            <label className="mt-2" htmlFor="select">Choose Qualities</label>
            <MultiSelectField
                rows="1"
                style={{
                    resize: 'none',
                    borderWidth: "1px",
                    borderStyle: "outset",
                    borderColor: "#000000",
                }}
                options={qualitieOptions}
                onChange={handleChange}
                name="qualitie"
                value={user?.qualities || data.qualitie}
                //defaultValue={data.qualitie}
                label="Choose your qualities"
                selected={user?.qualities }
                />
                {errors && Object.keys(errors).length !== 0 && errors.qualitie &&
                    <span className="help-block error text-danger">{errors.qualitie}</span>}
                </div>
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
        {/* <Link to={"#"}> */}
                <button
                    type="submit"
                    className="btn btn-primary btn-block login-btn"
                    //disabled={!(errors === null)}
                    >Submit
                </button>
        {/* </Link> */}

        {/* Toggle SignUp to SignIn */}
                <p className="forgot-password text-right">
                {"Registered? "}
                <Link
                    onClick={() => {}}
                    to={"/login"}>
                {"sign in"}
                </Link>
            </p>

    </form>

    </div>
    </div>
    );
};

export default RegisterForm;
