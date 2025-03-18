'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

interface PriceData {
  gold: number;
  silver: number;
}

// Fetch Prices Function
const fetchPrices = async (): Promise<PriceData> => {
  const response = await fetch('http://localhost:5000/api/prices');
  if (!response.ok) {
    throw new Error('Failed to fetch prices');
  }
  return response.json();
};

const Home = () => {
  const { data, error, isLoading } = useQuery<PriceData>({
    queryKey: ['livePrices'],
    queryFn: fetchPrices,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching prices</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Jewelry Shop</h1>
      <p>Gold Price: ${data?.gold ?? 'N/A'}</p>
      <p>Silver Price: ${data?.silver ?? 'N/A'}</p>

      <Link href="/products" className="text-blue-500">
        View Products
      </Link>
    </div>
  );
};

export default Home;
