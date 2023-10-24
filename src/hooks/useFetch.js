/* -----------------------------
    REACT STRAPİ | STORE API
-------------------------------- */

import { useEffect, useState } from "react";

/* ----------------------------------------------------------------------- */

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  /* ----------------------------------------------------------------------- */

  return { isLoading, error, data };
}
