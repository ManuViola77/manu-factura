import './styles.css';

const ProductCard = ({
  product: { id, name, photo, supplies, hoursWork, totalCost, sellCost, patternLink, packaging },
  product,
}) => (
  <div className="product-card-container">
    <img src={photo} alt={name} className="product-card-image"></img>
    <span className="product-card-name">{name}</span>
  </div>
);

export default ProductCard;
