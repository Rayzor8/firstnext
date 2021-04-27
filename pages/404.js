import React from 'react'
import Button from '../components/Button'
const notFoundPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <h1 className=" mb-6 text-2xl md:text-4xl font-bold">Ooops something Error!!</h1>
            <h2>Your page url <span className="text-red-600 font-extrabold"> Cannot be Found.</span></h2>
            <Button buttonFor="/"/>
        </div>
    )
}

export default notFoundPage
