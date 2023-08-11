import React, { useState } from "react";
import axios from "axios";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    phoneNumber: "",
    date_of_birth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://65.1.106.13:8080/user/v1/create",
        formData
      );
      alert(`Your Data Deployed${formData.name}`);
      console.log("API response:", response.data);
    } catch (error) {
      console.error("API error:", error);
      alert(`There is some issue ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow bg-gray-100">
      <h2 className="text-2xl mb-4">Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-medium mb-1 text-indigo-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-medium mb-1 text-indigo-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block font-medium mb-1 text-indigo-900"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block font-medium mb-1 text-indigo-900"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="date_of_birth"
            className="block font-medium mb-1 text-indigo-900"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
