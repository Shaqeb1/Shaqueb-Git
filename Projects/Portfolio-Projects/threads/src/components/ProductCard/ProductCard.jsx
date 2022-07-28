import './ProductCard.scss'
import Button from '../Button/Button'

const ProductCard = ({product}) => {
    const {name, price , imageUrl} = product;

  return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='product-footer'>
            <span className='product-name'>{name}</span>
            <span className='product-price'>{price}</span>
        </div>
        <Button buttonType='inverted'>ADD TO CART</Button>
    </div>
  )
}

export default ProductCard