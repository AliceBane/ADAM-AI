from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from utils.openai_helper import ask_question
from utils.pdf_parser import extract_text_from_pdf
import os
from pydantic import BaseModel
from utils.openai_helper import ask_question

app = FastAPI()
stored_pdf_text = ""

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):
    global stored_pdf_text
    file_location = os.path.join(UPLOAD_DIR, file.filename)
    
    with open(file_location, "wb") as f:
        f.write(await file.read())

    extracted_text = extract_text_from_pdf(file_location)
    stored_pdf_text = extracted_text

    return {"text": extracted_text}

class QARequest(BaseModel):
    question: str

@app.post("/ask")
async def ask_qa(request: QARequest):
    global stored_pdf_text
    if not stored_pdf_text:
        return {"error": "No PDF text has been uploaded yet."}

    answer = ask_question(stored_pdf_text, request.question)
    print(f"\n\n[DEBUG] GPT Answer: {answer}\n\n")
    return {"answer": answer}