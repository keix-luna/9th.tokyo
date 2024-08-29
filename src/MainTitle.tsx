import React from 'react';
import { useTheme } from './ThemeContext';

const MainTitle: React.FC = () => {
  const { mode } = useTheme();
  const mainLogo = `images/keix-${mode}.png`;
  return (
    <div className="left main-title">
      <img src={mainLogo} className="main-logo" alt="main logo" width="150" height="150" />
    </div>
  );
}

export default MainTitle;
