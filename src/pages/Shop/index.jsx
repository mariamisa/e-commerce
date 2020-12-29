import React, { Component } from 'react'

import CollectionPreview from '../../components/CollectionPreview';
import data from './shopData';

export default class ShopPage extends Component {
    state={
        collections:data
    }
    render() {
        const {collections}=this.state;
        return (
            <div className="shop-page">
                {collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}
