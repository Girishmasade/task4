import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/api/products'); // Update with your products API
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Layout title="Products">
      <h1 className="text-2xl font-bold">Product Catalog</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <Product key={product} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Products;