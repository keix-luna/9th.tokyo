import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="contents">
                <div>
                    <a href="https://www.instagram.com/9th.tokyo/">
                        <img className="sns" alt="instagram" src="images/instagram-light.png" width="12" height="12" />
                    </a>
                    <a href="https://github.com/keix-luna">
                        <img className="sns" alt="github" src="images/github-light.png" width="12" height="12" />
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
