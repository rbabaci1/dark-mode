import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [OnDarkMode, setOnDarkMode] = useLocalStorage('onDarkMode', false);

  useEffect(() => {
    OnDarkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  }, [OnDarkMode]);

  return [OnDarkMode, setOnDarkMode];
};
