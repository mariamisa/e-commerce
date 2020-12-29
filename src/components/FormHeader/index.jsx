import React from 'react'

import './style.scss'

export default function FormHeader({title,subTitle}) {
    return (
        <div>
            <h2 styleName="title">{title}</h2>
            <span>{subTitle}</span>
        </div>
    )
}
