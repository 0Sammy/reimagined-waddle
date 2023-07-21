"use client"
import React, { useRef, useState } from 'react';

const PictureUploadAndDisplay = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      saveToLocalStorage(reader.result);
    } else {
      setImagePreview('');
    }
  };

  const saveToLocalStorage = (imageData) => {
    localStorage.setItem('image', imageData);
    console.log('Image saved to local storage!');
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <h2>Upload, Display, and Save Picture</h2>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleButtonClick}>Upload Picture</button>
      {imagePreview && (
        <div>
          <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px' }} /><p>huio</p>
        </div>
      )}
    </div>
  );
};

export default PictureUploadAndDisplay;

