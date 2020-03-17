import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // the value part
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // the setter part
  const setItem = value => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setItem];
};
