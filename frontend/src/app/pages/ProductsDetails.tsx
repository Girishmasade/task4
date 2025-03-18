'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Corrected import for App Router
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import Product from '../components/Product';

// Define Product Interface
interface Product {
  id: string;
  name: string;
  price: number;
}

const ProductDetails = () => {
  const { id } = useParams(); // Use Next.js 13+ App Router hook
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/products/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Layout title={product.name}>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>Price: ${product.price}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
     
      >
        Add to Cart
      </button>
    </Layout>
  );
};

export default ProductDetails;
