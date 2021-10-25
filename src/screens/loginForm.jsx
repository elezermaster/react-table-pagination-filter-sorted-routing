import React, {useState, useEffect} from 'react';
import '../screens/login.css'
import {Link,useParams,useLocation,useHistory} from 'react-router-dom'
import TextInputField from '../components/textInputField';
import {validator} from '../utils/validator'
import {Form,Select} from 'react-bootstrap'
import api from '../API'
import RadioBtnField from '../components/radioBtnField'
import SelectReact from 'react-select'
import MultiSelectField from '../components/multiSelect'
import FormSelectField from '../components/formSelectField';

const LoginForm = () => {
    const history = useHistory();
    const {type,id} = useParams()
    const location = useLocation();
    //console.log(location.state);
    // name: user.name,
    // professionId: user.profession._id,
    // professionName: user.profession.name,
    // qualities: user.qualities,
    const user = location.state
    // useEffect(() => {
    //     api.professions.getProfessionIdByName(user.profession.name)
    //         .then(data => {
    //             //setUserToEdit(data)
    //             console.log('getProfessionIdByName :',data)
    //         })
    //         //console.log('user edit :',userToEdit)
    //     },[location])
    console.log('user params',user)
    //console.log('user q:',user?.qualities)
    //console.log('type params',type)
    // const [userToEdit, setUserToEdit] = useState({})
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
    const [errors, setErrors] = useState()
    const [professions, setProfessions] = useState()
    const [qualitieOptions,setQualitieOptions] = useState({})
    let isValidSubmit
    const handleChange = (target) => {
        console.log('target', target)
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
        Object.keys(professions).forEach(prof => {
            if (professions[prof]._id === id) {
                //console.log('find prof',professions[prof])
                getProfession = professions[prof]
            }
        })
        return getProfession
    }
    const funcRedirect = () => {
        history.push(`/users/${id}`)// <Link to={`/users/${id}`}>
    }
    const handleSubmit = e => {
        e.preventDefault()
        const isValid = validate()
        const [isValidSubmit, isEditValid] = validate()
        const professionUpdated = getProfessionById(data.profession)
        console.log('professionUpdated',professionUpdated)
        data.profession = professionUpdated
        console.log('data before submit', data)
        const qualitiesUpdated = data.qualitie.map(q => {
            return {_id: q.value, name: q.label, color: q.color}
        })
        console.log('qualities before submit', qualitiesUpdated)
        // setData(prevState => ({
        //     ...prevState,
        //     qualities: qualitiesUpdated,
        // }))
        data.qualities = qualitiesUpdated
        //data.sex =
        console.log('all data before submit', data)
        setData(data)

        if (isEditValid) {
            api.users.update(id,data)
                .then(data => console.log('data updated on local',data),
                    //console.log('data updated',JSON.parse(localStorage.getItem("users")).find((user) => user._id === id,))
                )
        }
        funcRedirect()
        // if (!isValid) {
        //     console.log("is submit valid",isValid)
        //     return;
        // }
    }
    useEffect(() => {
        console.log('data changed effect', data)
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
        isValidSubmit = Object.keys(errors).length === 0
        const isEditValid = Object.keys(errors).length === 2
        return ([isValidSubmit, isEditValid])
    }
    useEffect(() => {
        api.professions.fetchAllProfessions()
            .then(data => setProfessions(Object.assign(data,{allProfession: {name: "all professions"} })))
        api.qualities.fetchAllQualities()
            .then(data => setQualitieOptions(data))
        //console.log('change')
        },[])//параметер за которым необходимо наблюдать
    //get users from local localStorage
    //if (id) {
        // useEffect(() => {
        //     api.users.getById(id)
        //         .then(data => {
        //             setUserToEdit(data)
        //             //console.log('user edit :',userToEdit)
        //         })
        //         console.log('user edit :',userToEdit)
        //     },[id])
    //}
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
        <h3>{formType}</h3>

        {user?.name &&
                <TextInputField
                label="Name"
                type="name"
                name="name"
                defaultValue={user.name}
                onChange={handleChange}
                placeholder="Enter name"
                //parentClassName="form-group"
                //className="form-control"
                id="name"
                error={errors && Object.keys(errors).length !== 0 && errors.name}
            />
        }

        <TextInputField
            label="Email address"
            type="email"
            name="email"
            defaultValue={user && user.email}// || data.email
            onChange={handleChange}
            placeholder="Enter email"
            //parentClassName="form-group"
            //className="form-control"
            id="email"
            error={errors && Object.keys(errors).length !== 0 && errors.email}
        />
        {(formType !== "edit") &&
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
        }
        {/* Second Password Form */}
        {(formType === "register") &&//no neeed edit here
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
        />}
        {/* Select Options Form Professions  */}
        {(formType === "register" || formType === "edit") &&
        (<div className="formGroup">
        <label className="mt-2" htmlFor="selectProfession">Choose Profession</label>
        <FormSelectField
            data={data}
            name="profession"
            onChange={handleChange}
            professions={professions}
            selected={user}
        />
        {/* <Form.Select
            defaultValue={data.profession}
            value={data.profession}
            name="profession"
            onChange={handleChange}
            aria-label="Choose profession"
            className="border-secondary border-1">
            <option disabled selected={data.profession === ""}>Select profession</option>
            {professions && professions.map(profession =>
            //console.log('data.profession',data.profession)
                <option
                    id={profession._id}
                    //onSelect={handleChange}
                    selected={profession.name === data.profession}
                    key={profession._id}
                    //value={profession._id}>
                    defaultValue={data.profession}>
                        {profession.name}
                </option>)}
        </Form.Select> */}
        {errors && Object.keys(errors).length !== 0 && errors.profession &&
            <span className="help-block error text-danger">{errors.profession}</span>}
        </div>)
        }
        {/* Radio Button Sex */}
        {(formType === "register" || formType === "edit") &&
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
        }
        {errors && Object.keys(errors).length !== 0 && errors.sex &&
            <span className="help-block error text-danger">{errors.sex}</span>}
        {/* Multy Select Qualities */}
        {(formType === "register" || formType === "edit") &&
            (
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
                value={user?.qualities || data.qualitie}//user.qualities
                //defaultValue={data.qualitie}
                label="Choose your qualities"
                selected={user?.qualities }
                />
                {errors && Object.keys(errors).length !== 0 && errors.qualitie &&
                    <span className="help-block error text-danger">{errors.qualitie}</span>}
                </div>//
                )
        }
        {/* Form Check Remember Me */}
        {(formType !== "edit") &&
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
        }
        {/* Submit Button */}
        {(formType === "edit")
        ? <button
                    type="submit"
                    className="btn btn-primary btn-block login-btn"
                    disabled={false}
                    >Submit Edit
        </button>
        : <Link to={`users/`}>
                <button
                    type="submit"
                    className="btn btn-primary btn-block login-btn"
                    disabled={false}
                    >Submit
                </button>
            </Link>
        }

        {(formType === "login") && <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>}
        {/* Toggle SignUp to SignIn */}
        {(formType !== "edit") &&
                <p className="forgot-password text-right">
                {formType === "register" ? "Registered? " : "Not registered? "}
                <Link
                    onClick={() => setFormType(prevState => prevState === "register" ? "login" : "register")}
                    to={formType === "register" ? "/sign-in" : "/sign-in/register"}>
                {formType === "register" ? "sign in" : "sign up"}
                </Link>
            </p>
        }

    </form>

    </div>
    </div>
    );
};

export default LoginForm;
