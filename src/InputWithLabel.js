import React from "react"

const InputWithLabel = ({id, type, value, onInputChange, children}) => (
    <React.Fragment>
            <label htmlFor={id}> {children} </label> &nbsp;
            <input type={type} id={id} value={value} onChange={onInputChange}/> 

    </React.Fragment>
)

export default InputWithLabel

