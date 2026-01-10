import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import './CheckoutForm.css';

const SuccessPage = () => {
  return (
    <div className="checkout-page-container">
      <div className="success-card">
        <div className="success-icon-wrapper">
          <CheckCircle size={80} strokeWidth={1.5} />
        </div>
        
        <header className="success-header">
          <h1>Payment Successful!</h1>
          <p>Thank you for your order. Your eco-friendly products are being prepared for delivery.</p>
        </header>

        <div className="order-details-summary">
          <div className="summary-item">
            <span>Status</span>
            <span className="status-badge">Confirmed</span>
          </div>
          <div className="summary-item">
            <span>Delivery</span>
            <span>2-3 Working Days</span>
          </div>
        </div>

        <Link to="/" className="back-home-btn">
          Back to Home
        </Link>
        
        <div className="confetti-hint">
          Check your email for the receipt and tracking details.
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;