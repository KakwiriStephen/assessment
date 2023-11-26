import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import NavStepper from "./componets/NavStepper";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import PageOne from "./componets/pageOne";
import PageThree from "./componets/pageThree";
import MiddlePage from "./componets/MiddlePage";

const App = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input12: "",
    input13: "",
    input14: "",
    input15: "",
    additionalUsers: [{}],
  });

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    console.log(formData); // Log the form data to the console
  };

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const isLastStep = step === 3;

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#6762cc] to-white">
      <div className="flex items-center justify-between p-4 ">
        <div className="w-1/4 text-white font-semibold">
          <MdOutlineRadioButtonUnchecked />
        </div>
        <div className="w-1/2 text-center text-white text-lg font-bold font-mono">
          Create a new account
        </div>
        <div className="w-1/4 text-white text-right font-semibold font-mono">
          Contact us
        </div>
      </div>

      {/* Main Div to carry all compoments */}
      <div className="flex-1 flex  justify-center">
        <div className="w-4/5 bg-white p-0 shadow-2xl rounded-2xl">
          <NavStepper step={step} />
          {step === 1 && (
            <PageOne formData={formData} setFormData={setFormData} />
          )}
          {step === 2 && (
            <MiddlePage formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && (
            <PageThree formData={formData} setFormData={setFormData} />
          )}
        </div>
      </div>

      {/* Adding buttons bellow */}
      {step === 1 && (
        <div className="flex justify-around p-4">
          <button className="text-blue-500 px-4 py-2 rounded">
            <p className="flex justify-center items-center">
              <FaChevronLeft /> back to login
            </p>
          </button>

          <button
            className="bg-blue-500 text-white px-1 py-2 rounded w-32"
            onClick={nextStep}
          >
            <p className="flex justify-center items-center">
              Next Step <FaChevronRight />
            </p>
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex justify-around p-4">
          <button className=" text-blue-500 px-4 py-2 rounded">
            <p className="flex justify-center items-center">
              <FaChevronLeft /> back to login
            </p>
          </button>

          <div className="p-1">
            <button
              className="outline  outline-1 text-blue-600 px-1 py-2 rounded   mr-2"
              onClick={prevStep}
            >
              <p className="flex justify-center items-center">
                <FaChevronLeft /> Previous Step
              </p>
            </button>

            <button
              className="bg-blue-500 text-white px-1 py-2 rounded w-32"
              onClick={nextStep}
            >
              <p className="flex justify-center items-center">
                Next Step <FaChevronRight />
              </p>
            </button>
          </div>
        </div>
      )}

      {isLastStep && (
        <div className="flex justify-around p-4">
          <button className=" text-blue-500 px-4 py-2 rounded">
            <p className="flex justify-center items-center">
              <FaChevronLeft /> back to login
            </p>
          </button>

          <div className="">
            <button
              className="outline  outline-1 text-blue-600 px-1 py-2 rounded w-32  mr-2"
              onClick={prevStep}
            >
              <p className="flex justify-center items-center">
                <FaChevronLeft /> Previous Step
              </p>
            </button>

            <button
              className="bg-green-500 text-white px-4 py-2 rounded shadow-sm w-32"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
