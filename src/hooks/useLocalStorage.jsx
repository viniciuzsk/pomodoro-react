import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch (error) {
      console.warn(`Erro ao parsear localStorage[${key}]:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Erro ao salvar em localStorage[${key}]:`, error);
    }
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
