import React from 'react';
import { useTheme } from './ThemeContext';

const Discussions: React.FC = () => {

  const { mode } = useTheme();

  return (

    <div className="right main-contents">

      <div className="contents">
        <h2>This is currently in the development process.</h2>
        <a href="https://github.com/keix-luna">GitHub Repository</a>
      </div>

    </div>

  );
}

export default Discussions;
