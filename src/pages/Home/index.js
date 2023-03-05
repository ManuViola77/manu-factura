import useTranslation from 'hooks/useTranslation';
// import useWordDb from 'hooks/useWordDb';

import './styles.css';

const Home = () => {
  //const { letters, word, loading } = useWordDb();

  const t = useTranslation();

  // if (loading) return <Loading />;

  return (
    <div className="home-container">
      <h1>{t('home.home')}</h1>
    </div>
  );
};

export default Home;
