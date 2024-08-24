import React from 'react';
import { useTheme } from './ThemeContext';

const Footer: React.FC = () => {

    const { mode } = useTheme();
    const instagramLogo = `images/instagram-${mode}.png`;
    const githubLogo = `images/github-${mode}.png`;

    return (
        <div className="footer">
            <div className="contents">
                <div>
                    <a href="https://www.instagram.com/9th.tokyo/">
                        <img className="sns" alt="instagram" src={instagramLogo} width="16" height="16" />
                    </a>
                    <a href="https://github.com/keix-luna">
                        <img className="sns" alt="github" src={githubLogo} width="16" height="16" />
                    </a>
                </div>
                <div>Application Version fa8a794</div>
                <div>Powered by GNU/Linux with Vim</div>
            </div>
            <div className="copyright">Copyright ©️  2024 KEIX Co., Ltd. All Rights Reserved.</div>
        </div>
    );
  }

export default Footer;
