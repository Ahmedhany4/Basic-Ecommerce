import './css/product.css'
import { Link } from 'react-router-dom';
function Product(props) {
  const { product ,showButton } = props;
  return (
    <>
        <div className='item mb-4' key={product.id}>
          
          <div className="card" >
            {console.log(product.images)}
            {/* <img src={decodeURIComponent(product.images[0])} className="card-img-top" alt={product.title} /> */}
            <img src={product.uploadImage.url} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Price : {product.price} $</p>
              {showButton ? <Link to={`product/${product.id}`} className="btn btn-primary">Details</Link>:null}
            </div>
          </div>
        </div>
    </>
  );

}
export default Product;