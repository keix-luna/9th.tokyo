import { useTheme } from './ThemeContext';

const MainTitle: React.FC = () => {

  const { mode } = useTheme();

  return (

    <div className="left main-title">
      <img src={`images/keix-${mode}.png`} className="main-logo" alt="main logo" width="150" height="150" />
    </div>

  );
}

export default MainTitle;
