import { useState } from 'react';

function QASection() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    setAnswer(`(Answer for: "${question}")`);
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleAsk}>Ask</button>
      {answer && <p><strong>Answer:</strong> {answer}</p>}
    </div>
  );
}

export default QASection;
