import { useState } from 'react';
import axios from 'axios';


const TailWind = () => {
  
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);


    
  };

  const handleSearch = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    setResponse('');

     try {
      const inpuSurak = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [{ text: input }]
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const generatedText = inpuSurak.data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        setResponse(generatedText);
      } else {
        setResponse('Ответ пустой или неожиданной структуры.');
      }
    } catch (err) {
      console.error(err);
      setError('Ошибка при запросе к Gemini API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>Gemini AI Поиск</h2>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Введите запрос"
        style={{ width: '300px', padding: '8px' }}
      />

      <button onClick={handleSearch} disabled={loading} style={{ marginLeft: '10px', padding: '8px 12px' }}>
        {loading ? 'Загрузка...' : 'Поиск'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}

      {response && (
        <div style={{ marginTop: '1.5rem', whiteSpace: 'pre-wrap' }}>
          <h3>Ответ:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default TailWind;