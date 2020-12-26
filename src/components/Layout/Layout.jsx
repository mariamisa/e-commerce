import React from 'react'

import Header from '../common/Header/Header'

export default function Layout({children}) {
    return (
        <div>
           <Header />
           {children}
        </div>
    )
}
