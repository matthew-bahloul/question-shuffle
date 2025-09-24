"use client";
import React, { useState, useEffect } from 'react';

const imageFiles = [
  "/images/2.3--23.png",
  "/images/2.3--11.png",
  "/images/2.3--25.png",
  "/images/2.3--35.png",

  "/images/2.4--21.png",
  "/images/2.4--31.png",
  "/images/2.4--33.png",

  "/images/2.5--33.png",
  "/images/2.5--43.png",
  "/images/2.5--45.png",
  "/images/2.5--49.png",

  "/images/2.6--33.png",
  "/images/2.6--35.png",
  "/images/2.6--61.png",

  "/images/2.7--23.png",
  "/images/2.7--25.png",
  "/images/2.7--33.png",

  "/images/3.1--19.png",
  "/images/3.1--23.png",
  "/images/3.1--33.png",
  "/images/3.1--35.png",

  "/images/3.2--23.png",
];

// The main App component that contains all the logic and UI.
const App = () => {
  const [currentImage, setCurrentImage] = useState('');

  // Function to pick a random image from the list.
  const pickRandomImage = () => {
    if (imageFiles.length === 0) {
      console.error("No images available in the 'imageFiles' array.");
      return;
    }
    // Get a random index from the imageFiles array.
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    // Update the state with the new random image name.
    setCurrentImage(imageFiles[randomIndex]);
  };

  // On initial load, pick a random image to display.
  useEffect(() => {
    pickRandomImage();
  }, []);

  return (
    // The main container for the app, using Tailwind CSS classes for styling.
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4 font-sans">

      {/* Container for the button, pinned to the top of the page. */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={pickRandomImage}
          className="px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Shuffle Image
        </button>
      </div>

      {/* Main content container for the image. */}
      <div className="relative mt-24">
        {currentImage ? (
          // Display the image if a file name has been selected.
          <img
          src={`https://matthew-bahloul.github.io/question-shuffle${currentImage}`}
            alt="hey monkey, solve this"
            className="rounded-xl shadow-2xl max-w-full h-auto"
            style={{
              maxWidth: '80vw',
              maxHeight: '70vh',
              backgroundColor: "white",
              padding: "10%",
              
            }}
          />
        ) : (
          // Display a loading message while the image is being selected.
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <p className="text-gray-600">Loading image...</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default App;
