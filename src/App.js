import './App.css';
import React, { useState } from 'react';
import { MultiStepForm, Step } from 'react-multi-form';

function App() {
  const [formStep, setFormStep] = useState(1);
  return (
    <>
      <h3 className="text-xl font-semibold text-amber-500">1</h3><h2 className="text-xl font-semibold">is mij onbekend/ kan ik niet</h2>
      <h3 className="text-xl font-semibold text-amber-500">2</h3><h2 className="text-xl font-semibold">ik weet ervan, maar heb het nooit gebruikt</h2>
      <h3 className="text-xl font-semibold text-amber-500">3</h3><h2 className="text-xl font-semibold">ik weet het en kan het toepassen</h2>
      <h3 className="text-xl font-semibold text-amber-500">4</h3><h2 className="text-xl font-semibold">ik kan het toepassen in andere situaties / omstandigheden</h2>
      <h3 className="text-xl font-semibold text-amber-500">5</h3><h2 className="text-xl font-semibold">ik kan een ander uitleggen wat het is en hoe je het kan toepassen</h2>


      <MultiStepForm activeStep={formStep}>


        <Step label="one">

          <div class="flex justify-center">
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">3</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">5</label>
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setFormStep(2)}>verder</button>
        </Step>
        <Step label="Two">
          <div class="flex justify-center">
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">3</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">5</label>
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setFormStep(1)}>terug</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setFormStep(3)}>verder</button>

        </Step>
        <Step label="Three">
          <div class="flex justify-center">
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">1</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">2</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">3</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label inline-block text-gray-800" for="inlineRadio30">5</label>
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setFormStep(2)}>terug</button>

        </Step>
      </MultiStepForm>
    </>
  );
}

export default App;
