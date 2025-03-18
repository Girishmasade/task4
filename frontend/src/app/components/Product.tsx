import React from 'react';

interface ProductProps {
  product: {
    id: 1,
    name: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="border p-4 rounded" key={product.id}>
      <h2 className="font-bold">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default Product;