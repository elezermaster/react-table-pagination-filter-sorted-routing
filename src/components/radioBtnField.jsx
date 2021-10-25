import React,{useEffect} from 'react';
import PropTypes from 'prop-types'
import {InputGroup,FormControl,Row,Col,Container,Form} from 'react-bootstrap'

const RadioBtnField = ({options,name,onChange,value,label,selected}) => {
    console.log('radio options',options)
    console.log('radio name',name)
    console.log('radio value',value)
    console.log('radio selected sex',selected)
    const handleChange = ({target}) => {
        console.log('target sex',target.value)
        onChange({name: target.name, value: target.value})
    }
    useEffect(() => {
        onChange({name: name,value: selected})
            console.log('selected sex setted :',selected)
        },[selected])
    return (
        <>
        <label className="mt-2" htmlFor="selectGender">{label}</label>

        <Form className="justify-content-md-space-between border-secondary border-1">
            <div
                style={{
                    borderWidth: "1px",
                    borderStyle: "outset",
                    borderColor: "#6c757d",
                    //borderRadius: "5px",
                    padding: "5px",
                    justifyContent: "space-around", //"space-between",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                    //fontWeight: "400",
                    lineHeight: "1.5",
                    borderRadius: ".25rem",
                    fontStyle: "normal",
                    fontWeight: "normal",
                }}
                //key={`inline-radio`}
                className="justify-content-md-space-between">
                    {options.map((option,index) => (
                        <Form.Check
                        style={{
                            marginLeft: "5px",
                            fontStyle: "normal",
                            fontWeight: "normal",
                        }}
                            key={index}
                            className="ml-3"
                            inline
                            label={option.name}//"male"
                            name={name}
                            type="radio"
                            id={`${option.name} ${option.value}`}
                            defaultChecked={selected === option.value || value === option.value}
                            //checked={selected === option.value || value === option.value}
                            onChange={handleChange}
                            defaultValue={option.value}
                            // selected={selected?.professionId === profession._id || profession._id === data.profession}
                            // key={selected?.professionId || profession._id}
                            // value={selected?.professionId || profession._id}
                            // defaultValue={ selected?.professionId || profession._id}>
                        />
                    ))}

            {/* <Form.Check
                inline
                label="female"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
            />
            <Form.Check
                inline
                label="other"
                name="group1"
                type="radio"
                id={`inline-radio-3`}
            /> */}
            </div>
        </Form>
        {/* <InputGroup className="justify-content-md-space-between">
        <Container>
        <Row>
            <Col xs={6} md={4}>
                <Row>
                <label id="inputGroup-sizing-sm">
                <InputGroup.Radio variant="outline-secondary" name="sex" aria-label="Radio button for following text input" />
                male
                </label>
                <label className="radio-inline control-label">
                male
                </label>
                </Row>
            </Col>
            <Col xs={6} md={4}>
                <InputGroup.Radio
                    ml-1
                    label="female"
                    value={value}
                    name="sex"
                    aria-label="Radio button for following text input" />
                female
            </Col>
            <Col xs={6} md={4}>
            <InputGroup.Radio
                ml-1
                label="other"
                value={value}
                name="sex"
                aria-label="Radio button for following text input" />
            other
            </Col>
        </Row>
        </Container>
        </InputGroup> */}

        {/* <label htmlFor="selectGender">Choose Gender</label>
        <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Radio name="group1"/>
            <InputGroup.Text >London</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl/>
    </InputGroup> */}
    {/* <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Radio name="group1"/>
            <InputGroup.Text >New York</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl/>
    </InputGroup>
    <InputGroup>
        <InputGroup.Prepend>
            <InputGroup.Radio name="group1"/>
            <InputGroup.Text >Colombo</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl/>
    </InputGroup> */}
        </>
    );
};

RadioBtnField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
}
export default RadioBtnField;
