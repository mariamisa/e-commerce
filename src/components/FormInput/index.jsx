import React from 'react'

import './style.scss'

export default function FormInput({ handelChange,label,...otherProps}) {
console.log(otherProps)   
    return (
        <div className="group">
            <input 
            className="form-input"
            onChange={handelChange}
            {...otherProps}
             />

            {label?
            (<label
             className={`${otherProps.value?"shrink":""} form-input-label`}>
                {label}
            </label>):null
            }
        </div>
    )
}
