import React,{Component} from 'react'

import sectionsData from './sectionsData';
import MenuItem from './MenuItem';

import './style.scss'


export default class Header extends Component {
    state={
        sections:sectionsData
    }

    render() {
        const {sections}=this.state;

        return (
            <div className='homepage'>
                <div className='directory-menu'>
                    {sections.map(({id,...otherSectionProps})=>(
                    <MenuItem 
                        key={id}
                        {...otherSectionProps}
                     />))}
                </div>
            </div>
        )
    }
}
