import React from 'react'

import './style.scss'

export default function FormHeader({title,subTitle}) {
    return (
        <div>
            <h2 className="title">{title}</h2>
            <span>{subTitle}</span>
        </div>
    )
}
