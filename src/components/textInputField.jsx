import React,{useState} from 'react'
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
}) => {
    const getInputClasses = () => {
        return "form-control" +
        (error ? " is-invalid" : "")// +
        //(type === "password" ? " border-right-0" : "")
    }
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }
    return (
        <div className={
            (parentClassName || "form-group") &&
            (error && "error")} >
            <label htmlFor={name}>{label}</label>
            <div className="input-group">
            <input
                type={showPassword ? "text" : type}
                className={className || getInputClasses()}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {type === "password" && error &&
                    <div
                        onClick={toggleShowPassword}
                        className="btn btn-outline border-left-0 border-danger error">
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
