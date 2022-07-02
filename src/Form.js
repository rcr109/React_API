import React from 'react';

const Form = ({onSubmit, onType}) => {
    return(
        <div>
        <form onSubmit={event => {
            onSubmit()
            event.preventDefault()
        }}>
            <input id='nome' onChange={onType}/>
            <input type='submit'/>
        </form>
        </div>
    )
}

export default Form