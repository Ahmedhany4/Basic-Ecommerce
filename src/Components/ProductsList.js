import { useEffect, useState } from 'react';
import Product from './Product';

function ProductsList() {
  const api_url = "https://x8ki-letl-twmt.n7.xano.io/api:CcyG8c7s/product_list";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      // If the same category is clicked again, clear the filter
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className='products-list'>
      <h2 className="text-center p-5">Our Products</h2>
      <div className='buttons ' >
        {categories.map((category) => (
          <button
            key={category}
            className={`btn btn-info ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
        <button className='btn btn-danger' onClick={() => setSelectedCategory(null)}>Clear</button>
      </div>
      <div className='container'>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} showButton={true} />
          ))}
      </div>

    </div>
  );
}

export default ProductsList;
