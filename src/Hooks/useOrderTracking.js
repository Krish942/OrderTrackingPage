import { useState, useEffect } from 'react';

const useOrderTracking = () => {
  const [orderId, setOrderId] = useState('123456789');
  const [status, setStatus] = useState('Processing');
  const [estimatedDelivery, setEstimatedDelivery] = useState('2-4 days');
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStatus('Shipped');
      setOrderDetails([
        { productName: 'Product A', quantity: 1, price: '$50' },
        { productName: 'Product B', quantity: 2, price: '$30' },
      ]);
    }, 2000);
  }, []);

  return { orderId, status, estimatedDelivery, orderDetails };
};

export default useOrderTracking;
