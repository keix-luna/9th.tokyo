import { useTheme } from './ThemeContext';

const Header: React.FC = () => {
  const { setMode } = useTheme();

  return (
    <div className='header'>
      <ul>
        <li className="menu"><a href="/">About 9th.tokyo</a></li>
        <li className="menu"><a href="/architecture">Architecture</a></li>
        <li className="menu"><a href="https://zx1.notion.site/Project-9th-tokyo-db0087ebf8c14dc384c93217776219d6">Requirements definition</a></li>
        <li className="menu"><a href="/disscussions">Discussions</a></li>
        <li className="menu">
          <span onClick={() => { setMode('dark') }}>
            <img className="mode" src="images/dark.svg" width="16px" height="16px" alt="dark" />
          </span>
          <span onClick={() => { setMode('light') }}>
            <img className="mode" src="images/light.svg" width="16px" height="16px" alt="light" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
