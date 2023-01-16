import {useEffect, useState} from 'react';

export const useFetch = (url, additionalData) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await fetch(url);
        const jsonResponse = await response.json();

        setData([...jsonResponse, additionalData]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [additionalData, url]);

  return {data, error, loading};
};
