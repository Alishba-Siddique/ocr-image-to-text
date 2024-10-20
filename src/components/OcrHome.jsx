import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import tesseractLanguages from '../utilities/tesseractLanguages.js'; // Import the language array

const OCRComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ocrText, setOcrText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('urd'); // Default to Urdu
  const [isCopied, setIsCopied] = useState(false); // New state for copying

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleOcrProcess = () => {
    setIsProcessing(true);
    Tesseract.recognize(
      selectedImage,
      selectedLanguage, // Dynamically use the selected language code
      {
        langPath: 'https://tessdata.projectnaptha.com/4.0.0_best/', // Path to language data CDN
        logger: (m) => console.log(m), // Optional logger to track progress
      }
    )
      .then(({ data: { text } }) => {
        setOcrText(text);
        setIsProcessing(false);
      })
      .catch((error) => {
        console.error(error);
        setIsProcessing(false);
      });
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(ocrText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-[#32b79f]">
      <div className="max-w-7xl flex justify-center flex-col space-y-10 items-center rounded-xl my-20 p-20 bg-[#ffffff]">
        <p className="text-4xl font-bold p-10">OCR with Multiple Languages</p>

        {/* Language selection dropdown */}
        <div>
          <label className="text-lg">Select Language of the image text: </label>
          <select className="p-2 border-2 border-[#32b79f] rounded-xl" value={selectedLanguage} onChange={handleLanguageChange}>
            {tesseractLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Image upload */}
        <div>
          <input type="file" accept="image/*" onChange={handleImageUpload} className='bg-[#32b79f] text-white font-bold py-2 px-4 rounded' />
          {selectedImage && (
            <img src={selectedImage} alt="Selected" width="300" />
          )}
        </div>
        
        {/* OCR Process button */}
        <button
          className="bg-[#32b79f] text-white font-bold py-2 px-4 rounded"
          onClick={handleOcrProcess}
          disabled={isProcessing || !selectedImage}
        >
          {isProcessing ? 'Processing...' : 'Extract Text'}
        </button>

        {/* Display extracted text */}
        {ocrText && (
          <div className="w-full text-center">
            <p className='text-3xl font-bold'>Extracted Text:</p>
            <p className="text-xs p-8 max-w-3xl">{ocrText}</p>

            {/* Copy button */}
            <button
              className="bg-[#32b79f] text-white font-bold py-2 px-4 rounded mt-2"
              onClick={handleCopyText}
            >
              {isCopied ? 'Copied!' : 'Copy Text'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OCRComponent;
