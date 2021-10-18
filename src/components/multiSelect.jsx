import React,{useEffect} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
//import { colourOptions } from '../data';
import styled from 'styled-components'

const animatedComponents = makeAnimated();
const MultiSelect = ({options,onChange,name,label,value}) => {
    const defaultValues = Object.keys(value).map(qualitie => ({
        label: value[qualitie].name,
        value: value[qualitie]._id,
        }),
        )
    console.log('defaultValues',defaultValues)
    console.table("options",options)
    const optionsQualitiesArray = !Array.isArray(options) && typeof options === "object"
    ? Object.keys(options).map(qualitie => ({
        label: options[qualitie].name,
        value: options[qualitie]._id,
        //color: options[qualitie].color,
        }),
        )
    : options
    const handleChange = (value) => {
        onChange({name: name, value})
    }
    useEffect(() => {
        onChange({name: name,value: value})
            console.log('multi selected setted :',value)
        },[value])

    const qualitieNames = optionsQualitiesArray.map((name, index) => {
        return name.label
    })
    console.table("qualitieNames",qualitieNames)
    console.table("optionsQualitiesArray",optionsQualitiesArray)
    return (
        <SelectStyled
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={defaultValues}
        isMulti
        options={optionsQualitiesArray}
        onChange={handleChange}
        name={name}
        styles={{
            resize: 'none',
            borderWidth: "1px",
            borderStyle: "outset",
            borderColor: "#000000",
        }}
        className=" border-secondary border-1 "
      />
    );
};

const SelectStyled = styled(Select)`
    .css-b62m3t-container {
        border-width: "1px";
        border-style: "outset";
        border-color: "#000000";
    }
    .sc-dlfnuX .fdryCy  .border-secondary .border-1 .css-b62m3t-container {
        border-width: "1px";
        border-style: "outset";
        border-color: "#000000";
    }
    .sc-dlfnuX {
        border-color: "#000000";
    }
    .css-b62m3t-container {
        border-color: "#000000";
    }
`
export default MultiSelect;
