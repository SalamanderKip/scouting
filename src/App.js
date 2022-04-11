import './App.css';
import React, { useState, useEffect } from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import { RadioButtons } from './components/RadioButtons';

function App() {
  const [formStep, setFormStep] = useState(1);
  const [questions, setQuestions] = useState([])
  const getData = () => {
    fetch('questions.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        setQuestions(data)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-amber-500">1</h3><h2 className="text-xl font-semibold">is mij onbekend/ kan ik niet</h2>
        <h3 className="text-xl font-semibold text-amber-500">2</h3><h2 className="text-xl font-semibold">ik weet ervan, maar heb het nooit gebruikt</h2>
        <h3 className="text-xl font-semibold text-amber-500">3</h3><h2 className="text-xl font-semibold">ik weet het en kan het toepassen</h2>
        <h3 className="text-xl font-semibold text-amber-500">4</h3><h2 className="text-xl font-semibold">ik kan het toepassen in andere situaties / omstandigheden</h2>
        <h3 className="text-xl font-semibold text-amber-500">5</h3><h2 className="text-xl font-semibold">ik kan een ander uitleggen wat het is en hoe je het kan toepassen</h2>
      </div>

      <MultiStepForm activeStep={formStep}>
        <Step label="one">
          <div className="flex justify-center">
            {console.log(questions)}
            {questions.one?.map((question) => (
              <div className='question' key={question.id}>
                <p>{question.question}</p>
                <RadioButtons name={question.id} />
              </div>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setFormStep(2)}>verder</button>
        </Step>
        <Step label="Two">
          <div className="flex justify-center">
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">3</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">4</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">5</label>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setFormStep(1)}>terug</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setFormStep(3)}>verder</button>

        </Step>
        <Step label="Three">
          <div className="flex justify-center">
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio20">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">3</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">4</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineRadio30">5</label>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setFormStep(2)}>terug</button>

        </Step>
      </MultiStepForm>
    </>
  );
}

export default App;
