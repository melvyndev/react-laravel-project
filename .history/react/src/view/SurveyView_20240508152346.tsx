import { PhotoIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import axiosClient from "../axios.js";
import { useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const SurveyView: React.FC = () => {

  const { showToast } = useStateContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    status: false,
    description: "",
    image: null,
    image_url: null,
    expire_date: "",
    questions: [],
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: valueToUse });
  };

  const onImageChoose = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (!ev.target.files) return;
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSurvey({
        ...survey,
        image: file,
        image_url: reader.result,
      });    };
      ev.target.value = "";

    reader.readAsDataURL(file);
  };


  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = { ...survey };
    if (payload.image) {
      payload.image = payload.image_url;
    }
    delete payload.image_url;
    let res = null;
    if (id) {
      res = axiosClient.put(`/survey/${id}`, payload);
    } else {
      res = axiosClient.post("/survey", payload);
    }

    res
    .then((res) => {
      console.log(res);
      navigate("/surveys");
      if (id) {
        showToast("The survey was updated");
      } else {
        showToast("The survey was created");
      }
    })
    .catch((err) => {
      if (err && err.response) {
        setError(err.response.data.message);
      }
      console.log(err, err.response);
    });

  };



  return (
    <form  onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-300/30 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <PhotoIcon className="h-12 w-12 text-gray-400" aria-hidden="true" />

                <input
                  type="file"
                  id="photo"
                  name="photo"
                  placeholder="Change"
                  onChange={handleChange}
                  value={formData.img_url}
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300/30 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Survey Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.title}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.description}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="expire-date" className="block text-sm font-medium leading-6 text-gray-900">
                Expire Date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="expire-date"
                  id="expireDate"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                  value={formData.expireDate}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="active" className="block text-sm font-medium leading-6 text-gray-900">
                Active
              </label>
              <div className="mt-2">
                <input
                  type="checkbox"
                  name="active"
                  id="active"
                  autoComplete="family-name"
                  checked={formData.active}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default SurveyView;

