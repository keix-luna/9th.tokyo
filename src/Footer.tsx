import React from 'react';
import ig from './instagram-light.png';
import gh from './github-light.png';

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
            <div className="contents">
                <div>
                    <a href="https://www.instagram.com/9th.tokyo/">
                        <img className="sns" src={ig} width="12" height="12" />
                    </a>
                    <a href="https://github.com/keix-luna">
                        <img className="sns" src={gh} width="12" height="12" />
                    </a>
                </div>
                <div>Application Version fa8a794</div>
                <div>Powered by GNU/Linux with Vim</div>
            </div>
            <div className="copyright">Copyright ©️  2024 KEIX Co., Ltd. All Rights Reserved.</div>
        </div>
    );
  }
}

export default Footer;
