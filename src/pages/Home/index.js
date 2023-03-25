import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import IconButton from '@mui/material/IconButton';

import ProductCard from 'components/ProductCard';
import useHome from 'hooks/useHome';
import useTranslation from 'hooks/useTranslation';

import './styles.css';

const Home = () => {
  const { products } = useHome();

  const t = useTranslation();

  // if (loading) return <Loading />;

  return (
    <div className="home-container">
      <div className="title-button-container">
        <h1 className="home-title">{t('home.home')}</h1>
        <div className="add-stock-button">
          <IconButton
            color="secondary"
            //onClick={handleOpenModal}
            aria-label={t('home.addStock')}
          >
            <AddCircleOutlinedIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
