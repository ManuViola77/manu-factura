import Logo from 'components/Logo';

import './styles.css';

const PageWrapper = ({ title, subtitle, children }) => (
  <div className="page-container">
    <Logo />
    <div className="titles-container">
      {title && <h1 className="page-title">{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
    </div>
    {children}
  </div>
);

export default PageWrapper;
