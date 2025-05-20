# ADAM-AI

ADAM AI is a smart web application that allows students to upload their notes, ask questions based on those notes, and generate personalized quizzes using AI.

---

## Features

- Upload PDF files containing class notes
- Ask contextual questions based on uploaded content
- Generate study quizzes automatically
- Supports OCR for scanned documents
- Built with a React frontend and a FastAPI (or Flask) backend

---

## Tech Stack

- **Frontend**: React
- **Backend**: FastAPI
- **NLP**: OpenAI
- **PDF/OCR Tools**: PyMuPDF, Tesseract

---

## Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
