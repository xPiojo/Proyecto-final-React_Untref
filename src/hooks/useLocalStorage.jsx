import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const retrieve = () => {
    const valueInLocalStorage = localStorage.getItem(key);
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  };

  const [value, setValue] = useState(retrieve);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

