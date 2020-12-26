import React,{Component} from 'react'

import sectionsData from './sectionsData';

import './style.scss'

function MenuItem({title,subTitle,imageUrl,size}) {

    const imageStyle={
        backgroundImage:`url(${imageUrl})`
    }

    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={imageStyle}/>
            <div className='content'>
                <h1 className='title'>{title}</h1>
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
                    {sections.map(({id,title,imageUrl,size})=>(
                    <MenuItem 
                        key={id}
                        title={title.toUpperCase()}
                        imageUrl={imageUrl}
                        size={size}
                     />))}
                </div>
            </div>
        )
    }
}
