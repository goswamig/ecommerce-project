import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const response = await axios.post('/api/create-order', { userId: 'user-id', products: 'products', totalAmount: 1000 });
        setOrder(response.data);
      } catch (error) {
        console.error('Error creating order', error);
      }
    };
    createOrder();
  }, []);

  return (
    <div>
      {order ? (
        <div>
          <h2>Order Confirmation</h2>
          <p>Estimated Delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Creating order...</p>
      )}
    </div>
  );
};

export default Order;

