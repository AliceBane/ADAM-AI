import os
import openai
from dotenv import load_dotenv

# Load API key
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def ask_question(pdf_text, question):
    prompt = f"""You are a helpful study assistant. Based on the following lecture notes, answer the student's question.

Lecture Notes:
{pdf_text}

Question: {question}
Answer:"""

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful AI tutor."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=300,
        temperature=0.7,
    )

    return response['choices'][0]['message']['content'].strip()
