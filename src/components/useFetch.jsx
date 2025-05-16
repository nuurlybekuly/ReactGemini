import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data");
        const json = await response.json();

          setData(json);
          setLoading(false);
          
      } catch (err) {
          setError(err.message);
          setLoading(false);
      }
    };

    fetchData();

  }, [url]);

  return { data, loading, error };
}
