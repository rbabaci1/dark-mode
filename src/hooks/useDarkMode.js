import { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [darkModed, setDarkModed] = useLocalStorage('darkModed', false);
};
