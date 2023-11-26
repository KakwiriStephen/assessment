const PageOne = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-blue-300 text-bold text-xl mt-2">Step 1</h2>
      <h3 className="text-2xl text-purple-300 ">Your Information</h3>
      <p className="text-lg text-center mb-4 text-gray-400">
        Enter the login information for your account. You will <br />
        be able to create to create additional users after registering.
      </p>
      <div className="w-5/6 flex flex-wrap justify-center items-center mt-2">
        <div className="w-full sm:w-1/2 p-4">
          <form>
            <div className="mb-4">
              <label htmlFor="input1">
                First Name<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input Your First Name"
                type="text"
                id="input1"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                value={formData.input1}
                onChange={(e) =>
                  setFormData({ ...formData, input1: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input2">
                Email<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input Your Email"
                type="email"
                id="input2"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input2}
                onChange={(e) =>
                  setFormData({ ...formData, input2: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input3">
                Password<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Create Password"
                type="password"
                id="input3"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input3}
                onChange={(e) =>
                  setFormData({ ...formData, input3: e.target.value })
                }
              />
            </div>
          </form>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <form>
            <div className="mb-4">
              <label htmlFor="input4">
                Last Name<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input Your Last Name"
                type="text"
                id="input4"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input4}
                onChange={(e) =>
                  setFormData({ ...formData, input4: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input5">
                Phone Number<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input Your Phone Number"
                type="text"
                id="input5"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input5}
                onChange={(e) =>
                  setFormData({ ...formData, input5: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label htmlFor="input6">
                Confirm Password
                <span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Confirm Your Password"
                type="text"
                id="input6"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                required
                value={formData.input6}
                onChange={(e) =>
                  setFormData({ ...formData, input6: e.target.value })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
