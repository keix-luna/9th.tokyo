import React from 'react';
import { useTheme } from './ThemeContext';

const Footer: React.FC = () => {

  const { mode } = useTheme();

  return (
    <div className="footer">
      <div className="contents">
        <div>
          <a href="https://www.instagram.com/9th.tokyo/">
            <img className="sns" alt="instagram" src={`images/instagram-${mode}.png`} width="16" height="16" />
          </a>
          <a href="https://github.com/keix-luna">
            <img className="sns" alt="github" src={`images/github-${mode}.png`} width="16" height="16" />
          </a>
        </div>
        <div>Application Version v0.0.01.r1</div>
        <div>Powered by GNU/Linux with Vim</div>
      </div>
      <div className="copyright">Copyright ©️  2024 KEIX Co., Ltd. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
