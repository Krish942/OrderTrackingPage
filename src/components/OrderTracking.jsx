import React from 'react';
import '../styles/OrderTracking.css';

const OrderTracking = () => (
  <div className="order-tracking">
    <h3>Order Tracking</h3>
    <div className="order-summary">
      <p>Order ID: <span>123456789</span></p>
      <p>Status: <span>Shipped</span></p>
      <p>Estimated Delivery: <span>2-4 days</span></p>
    </div>
    <div className="order-summary">
      <p>Product A - 1 x $50</p>
      <p>Product B - 2 x $30</p>
    </div>
  </div>
);

export default OrderTracking;
