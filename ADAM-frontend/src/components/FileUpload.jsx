import { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [fileName, setFileName] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleChange = async (e) => {
    const file = e.target.files[0];
    setFileName(file?.name || '');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setExtractedText(res.data.text);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed. Is the backend running?');
    }
  };

  return (
    <div>
      <h2>Upload PDF Notes</h2>
      <input type="file" accept=".pdf" onChange={handleChange} />
      {fileName && <p>Selected: {fileName}</p>}
      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f9f9f9', padding: '1rem' }}>
            {extractedText}
          </pre>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
