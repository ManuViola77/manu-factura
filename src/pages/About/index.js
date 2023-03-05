import useTranslation from 'hooks/useTranslation';

import './styles.css';

const About = () => {
  const t = useTranslation();

  return <div className="about-container">{t('about.description')}</div>;
};

export default About;
