import { useState } from 'react';
import axios from 'axios';

function QASection() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/ask', {
        question: question.trim()
      });

      setAnswer(res.data.answer || 'No answer received.');
    } catch (err) {
      console.error('Q&A error:', err);
      setAnswer('Something went wrong. Is the backend running and PDF uploaded?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <input
        type="text"
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? 'Thinking...' : 'Ask'}
      </button>
      {answer && (
        <p style={{ marginTop: '1rem' }}>
          <strong>Answer:</strong> {answer}
        </p>
      )}
    </div>
  );
}

export default QASection;
