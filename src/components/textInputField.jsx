import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const textInputField = ({
    label,//email
    type,
    name,
    value,
    onChange,
    placeholder,
    className,
    parentClassName,
    id,
    error,
    defaultValue,
}) => {
    console.log(`error in text field ${name}:`,error)
    const handleChange = ({target}) => {
        onChange({name: target.name, value: target.value})
    }
    const getInputClasses = () => {
        return "form-control border-secondary border-1 " +
        (error ? " is-invalid border-danger " : "") +
        (type === "password" ? " border-end-0 " : "")
    }
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }
    useEffect(() => {
        onChange({name: name,value: defaultValue})
            console.log('selected text field setted :',defaultValue)
        },[defaultValue])
    return (
        <div className={
            (parentClassName || "form-group") &&
            (error && "error")} >
            <label className="mt-2" htmlFor={name}>{label}</label>
            <div className="input-group">
            <input
                type={showPassword ? "text" : type}
                className={className || getInputClasses()}
                id={id}
                name={name}
                //value={value}
                defaultValue={defaultValue}
                onChange={handleChange}
                placeholder={placeholder}
            />
            {type === "password" && ///error &&
                    <div
                        onClick={toggleShowPassword}
                        className={`btn btn-outline border-left-0 border-start-0 border-1 border-${error ? "danger" : "secondary"}`}>
                        {showPassword
                            ? <FaRegEyeSlash color={error ? "red" : "grey"}/>
                            : <FaRegEye color={error ? "red" : "grey"}/>
                        }
                    </div>
            }
            </div>
            {error && <span className="help-block error text-danger">{error}</span>}
        </div>
    )
}

textInputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
    error: PropTypes.string,
}
export default textInputField;
