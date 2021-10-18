import React,{useEffect} from 'react';
import {Form,Select} from 'react-bootstrap'

const FormSelectField = ({data, name,onChange,professions,selected}) => {
    console.log('data fromm Selected prof: ',data)
    console.log('selected prof:',selected)
    const handleChange = (event) => {
        //console.log('value from Select prof ',value.target.value)
        onChange({name: name,value: event.target.value})
    }
    useEffect(() => {
        onChange({name: name,value: selected})
            console.log('selected setted :',selected)
        },[selected])
    return (
        <Form.Select
            name={name}//"profession"
            onChange={handleChange}
            aria-label="Choose profession"
            className="border-secondary border-1">
                {/* //disabled  */}
            <option selected={selected || data.profession === ""}>Select profession</option>
            {professions && professions.map(profession =>
            //console.log('data.profession',data.profession)
                <option
                    id={selected || profession._id}
                    //onSelect={handleChange}
                    selected={selected === profession._id || profession._id === data.profession}
                    key={selected || profession._id}
                    value={selected || profession._id}
                    defaultValue={ selected || profession._id}>
                        {profession.name}
                </option>)}
        </Form.Select>
    );
};

export default FormSelectField;
