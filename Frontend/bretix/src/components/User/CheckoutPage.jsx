import React from 'react';
import CheckoutForm from './CheckoutForm';
import './CheckoutForm.css';

function CheckoutPage() {
  return (
    <div className="checkout-page-container">
      <div className="checkout-content">
        <header className="checkout-page-header">
          <h1>Finalize Your Purchase</h1>
          <p>You're just one step away from completing your eco-friendly journey.</p>
        </header>
        
        <div className="checkout-layout">
          <CheckoutForm />
        </div>
        
        <footer className="checkout-page-footer">
          <p>© 2026 Britex Eco. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default CheckoutPage;