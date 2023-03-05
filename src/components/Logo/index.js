import logo from 'assets/logoMandala.png';

import './styles.css';

const Logo = () => (
  <div className="rs-wordle-logo-container">
    <img src={logo} className="rs-wordle-logo" alt="RSWordle Logo" />
  </div>
);

export default Logo;
