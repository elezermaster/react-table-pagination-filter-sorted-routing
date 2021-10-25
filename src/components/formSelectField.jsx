import React,{useEffect} from 'react';
import {Form,Select} from 'react-bootstrap'

const FormSelectField = ({data, name,onChange,professions,selected}) => {
    console.log('data fromm Selected prof: ',data)
    console.log('selected prof:',selected)//user
    // professionId: user.profession._id,
    // professionName: user.profession.name,
    const handleChange = (event) => {
        console.log('handle value from Select profession ',event.target.value)
        onChange({name: name,value: event.target.value})
    }
    useEffect(() => {
        onChange({name: name,value: selected?.professionId})
            console.log('selected setted :',selected)
        },[selected])
    return (
        <Form.Select
            name={name}//"profession"
            onChange={handleChange}
            aria-label="Choose profession"
            className="border-secondary border-1">
                {/* //disabled  */}
            <option selected={selected?.professionId || data.profession === ""}>Select profession</option>
            {professions && professions.map(profession =>
            //console.log('data.profession',data.profession)
                <option
                    id={selected?.professionId || profession._id}
                    //onSelect={handleChange}
                    selected={selected?.professionId === profession._id || profession._id === data.profession}
                    key={selected?.professionId || profession._id}
                    value={profession._id}
                    defaultValue={ selected?.professionId || profession._id}>
                        {profession.name}
                </option>)}
        </Form.Select>
    );
};

export default FormSelectField;
