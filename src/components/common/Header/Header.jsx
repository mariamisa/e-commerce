import React from 'react'

import './Header.scss'

function MenuItem({title,subTitle}) {
    return (
        <div className='menu-item'>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>{subTitle}</span>
            </div> 
        </div>
    )
}

export default function Header() {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <MenuItem title="home" subTitle="home" />
                <MenuItem title="home" subTitle="home" />
                <MenuItem title="home" subTitle="home" />
                <MenuItem title="home" subTitle="home" />
                <MenuItem title="home" subTitle="home" />
            </div>
        </div>
    )
}
