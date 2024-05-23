import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageComponent from "../components/PageComponent";
import TButton from "../components/core/TButton";
import axios from 'axios';

const SurveyView: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

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

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);

    // Ajouter l'image si elle est sélectionnée
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    // Ajouter les autres champs
    formData.append('title', formData.get('title') as string);
    formData.append('description', formData.get('description') as string);
    formData.append('expire_date', formData.get('expire_date') as string);
    formData.append('status', formData.get('status') ? '1' : '0'); // Si le champ status est une checkbox

    try {
      const response = await axios.post('/api/survey', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Survey created successfully:', response.data);
      navigate('/surveys'); // Redirige après le succès
    } catch (error) {
      console.error('Error creating survey:', error);
      setError('There was an error creating the survey.'); // Affiche un message d'erreur
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(file);
        setImagePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <PageComponent
      title={!id ? "Create new Survey" : "Update Survey"}
      button={<TButton to="/surveys">Back</TButton>}
    >
      {loading && <div className="text-center text-lg">Loading...</div>}
      {!loading && (
        <form action="#" method="POST" onSubmit={onSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              {error && (
                <div className="bg-red-500 text-white py-3 px-3">{error}</div>
              )}

              {/* Image */}
              <div>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                {imagePreviewUrl && (
                  <div>
                    <img src={imagePreviewUrl} alt="Preview" style={{ width: '200px', height: '200px' }} />
                  </div>
                )}
              </div>
              {/* Image */}

              {/* Title */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Survey Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Survey Title"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              {/* Title */}

              {/* Description */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="description"
                  className="block text-sm fon
