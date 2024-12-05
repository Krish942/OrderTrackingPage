import React, { useState } from 'react';
import '../styles/CheckoutForm.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: 'India',
    paymentMethod: 'PayPal',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Transform the names to have their first letters capitalized
    const formattedData = {
      ...formData,
      firstName: capitalizeFirstLetter(formData.firstName),
      lastName: capitalizeFirstLetter(formData.lastName),
    };

    console.log('Formatted Data:', formattedData);

    alert(
      `Thank you for your order, ${formattedData.firstName} ${formattedData.lastName}!`
    );

    // Clear form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      country: 'India',
      paymentMethod: 'PayPal',
    });
  };

  return (
        <div className='main'>
          <div className="cheakout">
          <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Check Out</h2>
         
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <label>Address:</label>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <label>City:</label>
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <label>Country:</label>
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
      </select>
      </form>
          </div>
          <div className="payment">
          <label>Payment Method:</label>
      <select
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleChange}
      >
        <option>PayPal</option>
        <option>Credit Card</option>
      </select>

      <button type="submit">Submit</button>
          </div>
        </div>
    
    
  );
};

export default CheckoutForm;
