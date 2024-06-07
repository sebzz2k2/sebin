"use client";

import axios from "axios";
import React, { useState } from "react";

type ModalProps = {
  handleModal: () => void;
};
const Modal: React.FC<ModalProps> = ({ handleModal }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    email: false,
    message: false,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError({
      ...error,
      [e.target.name]: false,
    });

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!data.email) {
      setError({
        ...error,
        email: true,
      });
    }
    if (!data.message) {
      setError({
        ...error,
        message: true,
      });
    }
    if (data.email && data.message) {
      const res = await axios.post("/api/send", data);
      if (res.status === 200) {
        handleModal();
      }
    }
    setLoading(false);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleModal();
    }
  };
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        onClick={handleBackgroundClick}
      >
        <div className="relative w-1/2 mx-auto my-6">
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none p-4">
            <div className="flex items-start justify-between px-4 py-2 rounded-t-lg border-blueGray-200">
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleModal}
              >
                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative flex gap-8 px-4 py-2 flex-col">
              <div className="flex gap-8">
                <div className="w-full">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    className="border-b-2 border-cyan-900 outline-none px-2 py-1 w-full"
                  />
                </div>
                <div className="w-full">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="border-b-2 border-cyan-900 outline-none px-2 py-1 w-full"
                    name="lastName"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="w-full relative">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    className="border-b-2 border-cyan-900 outline-none px-2 py-1 w-full"
                  />
                  {error.email && (
                    <span className="absolute bottom-[-16px] left-0 text-xs text-red-500">
                      Email should be valid and is required
                    </span>
                  )}
                </div>
              </div>
              <div className="relative">
                <label>Please Enter Your Message</label>
                <textarea
                  rows={6}
                  name="message"
                  onChange={handleChange}
                  className="border-b-2 border-cyan-900 outline-none px-2 py-1 w-full"
                />
                {error.message && (
                  <span className="absolute bottom-[-16px] left-0 text-xs text-red-500">
                    Message is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end mt-8 px-4 py-2border-t border-solid rounded-b-lg border-blueGray-200 gap-4">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-8 py-1 border-red-500 border rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleModal}
              >
                Close
              </button>
              <button
                className="bg-green-900 text-white border border-green-900 rounded background-transparent font-bold uppercase px-8 py-1 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={handleSubmit}
                type="button"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
    </>
  );
};

export default Modal;
