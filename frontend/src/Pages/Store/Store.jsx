import React, { useState } from 'react';
import './Store.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import image1 from './1.jpg'; // import the image
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const products = [
  { id: 1, name: '50 points', price: 0.80, image: image1 },
  { id: 2, name: '100 points', price: 1.47, image: image2 },
  { id: 3, name: '250 points', price: 3.16, image: image3 },
  { id: 4, name: '1000 points', price: 11.18, image: image4 },
];

const convertToLKR = (priceInUSD) => {
  const conversionRate = 312.94;
  const priceInLKR = priceInUSD * conversionRate;
  return priceInLKR.toFixed(2);
};

const Store = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, price: convertToLKR(product.price) }]);
  };

  return (
    <div className={`App ${cartOpen ? 'dark-mode' : ''}`}>
      <button className="cart-button" onClick={toggleCart}>
        <i className="fas fa-shopping-cart"></i>
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </button>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rs {convertToLKR(product.price)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {cartOpen && (
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>{item.name} - Rs {item.price}</li>
            ))}
          </ul>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Store;