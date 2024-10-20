```markdown
# OCR with Multiple Languages

This project is a React component that utilizes Tesseract.js for Optical Character Recognition (OCR) to extract text from images in multiple languages. Users can upload an image, select the language of the text, and extract the text for further use.

## Preview

![9_](https://github.com/user-attachments/assets/8490dce2-665c-4b97-8931-183af31aceac)


## Features

- **Multi-language support:** Select the language of the text in the image for accurate OCR.
- **Image upload:** Upload an image file for text extraction.
- **Text extraction:** Extract text from the uploaded image using Tesseract.js.
- **Copy to clipboard:** Easily copy the extracted text to the clipboard.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following command:
   ```bash
   npm install
   ```

3. **Run the application:**
   Start the development server with:
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

1. **Select the language of the text in the image** from the dropdown menu.
2. **Upload an image** containing text using the file input.
3. Click the **"Extract Text"** button to start the OCR process.
4. The extracted text will be displayed below the button. You can copy the text to your clipboard by clicking the **"Copy Text"** button.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Tesseract.js:** A pure JavaScript OCR library for client-side processing.
- **Tailwind CSS:** A utility-first CSS framework for styling.

## Utilities

- **tesseractLanguages.js:** A utility file that contains the array of supported languages for Tesseract.js.
