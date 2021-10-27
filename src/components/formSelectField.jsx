import React,{useEffect} from 'react';
import {Form,Select} from 'react-bootstrap'

const FormSelectField = ({data, name,onChange,professions,selected}) => {
    //console.log('professions', professions)
    const handleChange = (event) => {
        onChange({name: name,value: event.target.value})
    }
    useEffect(() => {
        onChange({name: name,value: selected?.professionId})
        },[selected])
    return (
        <Form.Select
            name={name}//"profession"
            onChange={handleChange}
            defaultValue={selected?.professionId || data.profession}
            aria-label="Choose profession"
            className="border-secondary border-1">
                {/* //disabled  */}
            <option
                disabled={selected}
                //defaultValue={selected?.professionId || data.profession === ""}
                //selected={selected?.professionId || data.profession === ""}
            >Select profession</option>
            {professions && professions.map(profession =>
                <option
                    id={selected?.professionId || profession._id}
                    //onSelect={handleChange}
                    selected={selected?.professionId === profession._id || profession._id === data.profession}
                    key={profession._id}//{selected?.professionId || profession._id}
                    value={profession._id}
                    defaultValue={ selected?.professionId || profession._id}
                    >
                        {profession.name}
                </option>)}
        </Form.Select>
    );
};

export default FormSelectField;
