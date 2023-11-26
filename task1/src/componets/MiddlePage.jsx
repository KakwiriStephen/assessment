import { HiChevronRight, HiOutlineX, HiCheck } from "react-icons/hi";
import { RiQuestionFill } from "react-icons/ri";
import { useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

const MiddlePage = ({ formData, setFormData }) => {
  // creating a tooltip
  const tooltipRef = useRef();

  tippy(tooltipRef.current, {
    content:
      "Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less. National: Brands with distribution in 4 or more divisions or in more than 150 stores.",
    placement: "right",
    arrow: true,
  });

  return (
    // Header/ Upper Forms
    <div className="flex flex-col items-center relative">
      <h2 className="text-blue-300 text-bold text-xl mt-2">Step 2</h2>
      <h3 className="text-2xl text-purple-300 ">Bussiness Information</h3>
      <p className="text-lg text-center mb-4 text-gray-400">
        Please, enter information about your Company
      </p>

      <div className="w-5/6 flex flex-wrap justify-center items-center mt-2">
        <div className="w-full sm:w-1/2 p-4">
          <p className="absolute  text-blue-600  font-medium -mt-4">
            GENERAL INFORMATION
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="input7">
                Brand Name<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input Your Brand Name"
                type="text"
                id="input7"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                value={formData.input7}
                onChange={(e) =>
                  setFormData({ ...formData, input7: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="input8">
                Street Address<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input Your Street Address"
                type="email"
                id="input8"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input8}
                onChange={(e) =>
                  setFormData({ ...formData, input8: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="input9">
                Zip Code<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input Zip Code"
                type="password"
                id="input9"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input9}
                onChange={(e) =>
                  setFormData({ ...formData, input9: e.target.value })
                }
              />
            </div>
          </form>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="input10" className="flex items-center">
                Brand Type<span className="text-blue-500 text-xl">*</span>
                <div className="relative inline-block ml-2" ref={tooltipRef}>
                  <span className="text-gray-500 hover:text-gray-700">
                    <RiQuestionFill className="h-5 w-5" />
                  </span>
                </div>
              </label>
              <select
                id="input10"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input10}
                onChange={(e) =>
                  setFormData({ ...formData, input10: e.target.value })
                }
              >
                <option value="" disabled>
                  Select Type of Brand
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="input11">
                City<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input City"
                type="text"
                id="input11"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input11}
                onChange={(e) =>
                  setFormData({ ...formData, input11: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="input12">
                Tax ID Number
                <span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input Tax ID Number"
                type="text"
                id="input12"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input12}
                onChange={(e) =>
                  setFormData({ ...formData, input12: e.target.value })
                }
              />
            </div>
          </form>
        </div>
      </div>

      {/* LOWER FORM   */}
      <div className="w-5/6 flex flex-wrap justify-center items-center mt-2">
        <div className="w-full p-4">
          <form>
            <div className="mb-3">
              <p className="flex justify-start text-blue-600 mb-1 font-medium">
                DOCUMENTS
              </p>
              <label htmlFor="input13">
                Once the following documents are signed, you'll be ready to get
                started
              </label>

              <div className="flex justify-center items-center relative">
                <input
                  placeholder="Electronically sign the agrement(s)"
                  type="text"
                  id="input13"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  value={formData.input13}
                  onChange={(e) =>
                    setFormData({ ...formData, input13: e.target.value })
                  }
                />
                <HiCheck className="absolute top-2 right-3 mr-16 text-green-400 text-3xl hidden sm:block" />

                <HiChevronRight className="bg-blue-500 text-white rounded-lg text-5xl shadow-xl mx-2" />
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-center items-center relative">
                <input
                  placeholder="Non adult bevaragekroger market supplier waiver and release"
                  type="text"
                  id="input14"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  value={formData.input14}
                  onChange={(e) =>
                    setFormData({ ...formData, input14: e.target.value })
                  }
                />
                <HiOutlineX className="absolute top-2 right-3 mr-16 text-red-500 text-3xl hidden sm:block" />

                <HiChevronRight className="bg-blue-500 text-white rounded-lg text-5xl shadow-xl mx-2" />
              </div>
            </div>

            <div className="mb-3">
              <p className="flex justify-start text-blue-600 mb-1 font-medium">
                COI PDF UPLOAD
              </p>
              <label htmlFor="input15">
                Once the following documents are signed, you'll be ready to get
                started
              </label>

              <div className="flex justify-center items-center relative">
                <input
                  placeholder="Electronically sign the agreement(s)"
                  type="text"
                  id="input15"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                  value={formData.input15}
                  onChange={(e) =>
                    setFormData({ ...formData, input15: e.target.value })
                  }
                />
                <HiCheck className="absolute top-2 right-3 mr-16 text-green-400 text-3xl hidden sm:block" />

                <HiChevronRight className="bg-blue-500 text-white rounded-lg text-5xl shadow-xl mx-2" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
