import React, { useState } from "react";

const ProfilePhoto = () => {
  const [image, setImage] = useState("https://via.placeholder.com/100");
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please drop an image file!");
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        border: dragging ? "3px dashed #3498db" : "3px solid #ccc",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        backgroundColor: dragging ? "#ecf7ff" : "#fff",
        transition: "border 0.2s ease",
      }}
      title="Click or drag an image"
    >
      <img
        src={image}
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
          marginTop: "100px",
          marginLeft: "30px",
        }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default ProfilePhoto;
