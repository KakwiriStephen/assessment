const PageThree = ({ formData, setFormData }) => (
  <div className="flex flex-col items-center">
    <h2 className="text-blue-300 text-bold text-xl mt-2">Step 3</h2>
    <h3 className="text-2xl text-purple-300">Additional Users</h3>
    <p className="text-lg text-center mb-4 text-gray-400">
      Add information for additional users.
    </p>

    {formData.additionalUsers.map((user, index) => (
      <div
        key={index}
        className="w-5/6 flex-col  justify-center items-center mt-2"
      >
        <div className="w-full">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 p-2">
              <label htmlFor={`inputName1_${index}`}>
                Name<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input  First Name"
                type="text"
                id={`inputName1_${index}`}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                value={user.inputName1 || ""}
                onChange={(e) => {
                  const newUsers = [...formData.additionalUsers];
                  newUsers[index] = { ...user, inputName1: e.target.value };
                  setFormData({ ...formData, additionalUsers: newUsers });
                }}
                required
              />
            </div>
            <div className="md:w-1/2 p-2">
              <label htmlFor={`inputEmail1_${index}`}>
                Email<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                type="email"
                id={`inputEmail1_${index}`}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Email"
                value={user.inputEmail1 || ""}
                onChange={(e) => {
                  const newUsers = [...formData.additionalUsers];
                  newUsers[index] = { ...user, inputEmail1: e.target.value };
                  setFormData({ ...formData, additionalUsers: newUsers });
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 p-2">
              <label htmlFor={`inputName2_${index}`}>
                Name<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input  First Name"
                type="text"
                id={`inputName2_${index}`}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                value={user.inputName2 || ""}
                onChange={(e) => {
                  const newUsers = [...formData.additionalUsers];
                  newUsers[index] = { ...user, inputName2: e.target.value };
                  setFormData({ ...formData, additionalUsers: newUsers });
                }}
                required
              />
            </div>
            <div className="md:w-1/2 p-2">
              <label htmlFor={`inputEmail2_${index}`}>
                Email<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                type="email"
                id={`inputEmail2_${index}`}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Email"
                value={user.inputEmail2 || ""}
                onChange={(e) => {
                  const newUsers = [...formData.additionalUsers];
                  newUsers[index] = { ...user, inputEmail2: e.target.value };
                  setFormData({ ...formData, additionalUsers: newUsers });
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-full ">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 p-2">
              <label htmlFor={`inputName3_${index}`}>
                Name<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                placeholder="Input  First Name"
                type="text"
                id={`inputName3_${index}`}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                value={user.inputName3 || ""}
                onChange={(e) => {
                  const newUsers = [...formData.additionalUsers];
                  newUsers[index] = { ...user, inputName3: e.target.value };
                  setFormData({ ...formData, additionalUsers: newUsers });
                }}
                required
              />
            </div>
            <div className="md:w-1/2 p-2">
              <label htmlFor={`inputEmail3_${index}`}>
                Email<span className="text-blue-500 text-xl">*</span>
              </label>
              <input
                type="email"
                id={`inputEmail3_${index}`}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                placeholder="Email"
                value={user.inputEmail3 || ""}
                onChange={(e) => {
                  const newUsers = [...formData.additionalUsers];
                  newUsers[index] = { ...user, inputEmail3: e.target.value };
                  setFormData({ ...formData, additionalUsers: newUsers });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default PageThree;
