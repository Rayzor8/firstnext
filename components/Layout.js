import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

// min-h-screen flex flex-col justify-between

const Layout = ({children}) => {
    return (
        <div className="bg-gray-900  text-yellow-400">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
