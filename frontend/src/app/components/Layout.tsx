// frontend/components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/authContext';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Layout: React.FC<{ children: React.ReactNode; title?: string }> = ({ children, title }) => {
  const { cart } = useCart();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title ? `${title} - Jewelry Shop` : 'Jewelry Shop'}</title>
        <meta name="description" content="Shop the best jewelry with live price updates." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">Jewelry Shop</Link>
          </h1>
          <nav>
            <Link href="/products" className="mr-4">Products</Link>
            <Link href="/cart" className="mr-4">Cart ({cart.length})</Link>
            {user ? (
              <>
                <span className="mr-4">Welcome, {user.email}</span>
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="mr-4">Login</Link>
                <Link href="/register" className="mr-4">Register</Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Jewelry Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;