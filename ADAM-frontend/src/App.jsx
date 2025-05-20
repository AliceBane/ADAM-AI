import FileUpload from './components/FileUpload';
import QASection from './components/QASection';
import QuizGenerator from './components/QuizGenerator';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1> ADAM </h1>
      <FileUpload />
      <QASection />
      <QuizGenerator />
    </div>
  );
}

export default App;
