import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/Product.json');
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const Products = await response.json();
        setProducts(Products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { products, loading, error };
};

export default useProducts;