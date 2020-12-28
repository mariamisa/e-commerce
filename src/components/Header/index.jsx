import React,{Component} from 'react'
import {Link} from "react-router-dom";

import sectionsData from './sectionsData';

import './style.scss'

function MenuItem({title,linkUrl,imageUrl,size}) {

    const imageStyle={
        backgroundImage:`url(${imageUrl})`
    }

    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={imageStyle}/>
            <div className='content'>
                <Link to={linkUrl}><h1 className='title'>{title}</h1></Link>
                <span className='subtitle'>SHOP NOW</span>
            </div> 
        </div>
    )
}

export default class Header extends Component {
    state={
        sections:sectionsData
    }

    render() {
        const {sections}=this.state;

        return (
            <div className='homepage'>
                <div className='directory-menu'>
                    {sections.map(({id,title,imageUrl,size,linkUrl})=>(
                    <MenuItem 
                        key={id}
                        title={title.toUpperCase()}
                        imageUrl={imageUrl}
                        size={size}
                        linkUrl={linkUrl}
                     />))}
                </div>
            </div>
        )
    }
}
