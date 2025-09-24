// app/RandomImage.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const RandomImage = () => {
  const [imageNames, setImageNames] = useState([]);
  const [randomImageName, setRandomImageName] = useState('');

  // Fetch the list of images from the API route on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/images');
        const data = await res.json();
        setImageNames(data.filenames);
      } catch (error) {
        console.error("Failed to fetch image filenames:", error);
      }
    };
    fetchImages();
  }, []);

  // Function to get a random image
  const getRandomImage = () => {
    if (imageNames.length > 0) {
      const randomIndex = Math.floor(Math.random() * imageNames.length);
      setRandomImageName(imageNames[randomIndex]);
    }
  };

  // Set the initial image after fetching the list
  useEffect(() => {
    getRandomImage();
  }, [imageNames]);

  return (
    <div>
      <button 
        onClick={getRandomImage}
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        style = {{
          position: "fixed",
          top: "20px",
          zIndex: 1000,
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        Random Question
      </button>
      {randomImageName ? (
        <Image
          src={`/images/${randomImageName}`}
          alt="A randomly selected image"
          width={500}
          height={500}
          style={{ 
            backgroundColor: 'white',
            padding: "10%",
            borderRadius: "5px",
          }}

        />
      ) : (
        <p>Loading image...</p>
      )}
      {/*<button onClick={getRandomImage}>Shuffle Image</button>*/}
    </div>
  );
};

export default RandomImage;