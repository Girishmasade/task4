// frontend/pages/register.tsx
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
    try {
      await register(email, password);
      router.push('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Layout title="Register">
      <h1 className="text-2xl font-bold">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </Layout>
  );
};

export default Register;