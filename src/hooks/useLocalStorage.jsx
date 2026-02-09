import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  console.log(key, initialValue);
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key)
      ? Number(localStorage.getItem(key))
      : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
