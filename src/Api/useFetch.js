import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { collection } = useParams();

  useEffect(() => {

    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));

  }, [collection])
  
  return { data, loading, error };
}