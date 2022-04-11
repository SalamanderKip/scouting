import React from 'react'

export const RadioButtons = ({ name }) => {
    return (
        <>
            <div className="form-check form-check-inline">
                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name={name} id="inlineRadio1" value="option1" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">1</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name={name} id="inlineRadio2" value="option2" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">2</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name={name} id="inlineRadio3" value="option3" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">3</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name={name} id="inlineRadio3" value="option3" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">4</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name={name} id="inlineRadio3" value="option3" />
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">5</label>
            </div>
        </>
    )
}
