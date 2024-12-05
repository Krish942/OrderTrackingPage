import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import CheckoutForm from './components/CheckoutForm';
import OrderTracking from './components/OrderTracking';
import Footer from './components/Footer';

const App = () => (
  <div className="app">
    <Header />
    <main>
      <div className="container">
        <section>
          <CheckoutForm />
        </section>
        <section>
          <OrderTracking />
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
