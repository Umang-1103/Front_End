import { useState, useEffect, useCallback } from 'react';

/**
 * Reusable hook to handle API calls with loading and error states.
 * @param {Function} apiFunc - The service function that returns a Promise.
 * @param {Array} dependencies - Array of values that trigger a re-fetch when changed.
 * @param {boolean} immediate - Whether to fetch immediately on mount.
 */
export const useFetch = (apiFunc, dependencies = [], immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunc(...args);
      setData(result);
      return result;
    } catch (err) {
      setError(err.message || 'Something went wrong while fetching data.');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunc]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, loading, error, execute, setData };
};

export default useFetch;
