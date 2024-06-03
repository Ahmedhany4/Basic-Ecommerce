import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

function ProductDetails() {
  const { productId } = useParams();
  const api_url = "https://x8ki-letl-twmt.n7.xano.io/api:CcyG8c7s/product_list";
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch data only if productId is a number
    if (!isNaN(productId)) {
      fetch(`${api_url}/${productId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((product) => setProduct(product))
        .catch((error) => console.error('Error fetching product:', error));
    }
  }, [productId]); // useEffect depends on productId

  return (
    <div className='container'>
      {productId <= product.id ? (
        <Product product={product} showButton={false} />
      ) : (
        <h2 className='container'>This Product Not Found</h2>
      )}
    </div>
  );
}

export default ProductDetails;
