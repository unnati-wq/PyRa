import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import AuthModal from './AuthModal';
import CreatePaymentModal from './CreatePaymentModal';
import Dashboard from './Dashboard';
import PaymentProcessModal from './PaymentProcessModal';

interface Payment {
  id: string;
  title: string;
  amount: string;
  currency: string;
  pyusd: string;
  status: string;
  date: string;
}

const Hero = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentProcessModal, setShowPaymentProcessModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [userBalance, setUserBalance] = useState(0);
  const [pendingPayments, setPendingPayments] = useState<Payment[]>([]);
  const [completedPayments, setCompletedPayments] = useState<Payment[]>([]);

  const handleCreatePaymentClick = () => {
    if (isLoggedIn) {
      setShowPaymentModal(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const handlePayInPYUSDClick = () => {
    setShowPaymentProcessModal(true);
  };

  const handleAuthSuccess = (isSignUp: boolean) => {
    setShowAuthModal(false);
    setIsLoggedIn(true);
    setIsNewUser(isSignUp);
    
    // Set different data based on whether it's a new user or existing user
    if (isSignUp) {
      // New user - empty state
      setUserBalance(0);
      setPendingPayments([]);
      setCompletedPayments([]);
    } else {
      // Existing user - populate with demo data
      setUserBalance(156.73);
      setPendingPayments([
        { id: '1', title: "Website Design", amount: "500.00", currency: "USD", pyusd: "500.00", status: "Pending", date: "2024-01-15" },
        { id: '2', title: "Logo Design", amount: "150.00", currency: "USD", pyusd: "150.00", status: "Pending", date: "2024-01-14" },
      ]);
      setCompletedPayments([
        { id: '3', title: "App Development", amount: "1200.00", currency: "USD", pyusd: "1200.00", status: "Paid", date: "2024-01-10" },
        { id: '4', title: "Consultation", amount: "75.00", currency: "EUR", pyusd: "81.52", status: "Paid", date: "2024-01-08" },
      ]);
    }
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handleClosePaymentProcessModal = () => {
    setShowPaymentProcessModal(false);
  };

  const handlePaymentCreated = (paymentData: { title: string; amount: string; currency: string; pyusdAmount: string }) => {
    const newPayment: Payment = {
      id: Date.now().toString(),
      title: paymentData.title,
      amount: paymentData.amount,
      currency: paymentData.currency,
      pyusd: paymentData.pyusdAmount,
      status: "Pending",
      date: new Date().toISOString().split('T')[0]
    };
    
    setPendingPayments(prev => [newPayment, ...prev]);
    setShowPaymentModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsNewUser(false);
    setUserBalance(0);
    setPendingPayments([]);
    setCompletedPayments([]);
    setShowPaymentModal(false);
  };

  const handleBalanceUpdate = (newBalance: number) => {
    setUserBalance(newBalance);
  };

  // Show dashboard if user is logged in
  if (isLoggedIn) {
    return (
      <>
        <Dashboard 
          onCreatePayment={handleCreatePaymentClick}
          onLogout={handleLogout}
          userBalance={userBalance}
          pendingPayments={pendingPayments}
          completedPayments={completedPayments}
          onBalanceUpdate={handleBalanceUpdate}
        />
        {showPaymentModal && (
          <CreatePaymentModal 
            isOpen={showPaymentModal}
            onClose={handleClosePaymentModal}
            onPaymentCreated={handlePaymentCreated}
          />
        )}
      </>
    );
  }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-4 bg-white">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-medium text-black mb-2">
              PyRa
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-normal text-black mb-8 leading-tight">
            Accept payments in any
            <br />
            currency
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
            Get paid in PYUSD. Easy payments with card or Apple Pay.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-normal rounded-lg transition-all duration-300"
              onClick={handleCreatePaymentClick}
            >
              Create Payment Link
            </Button>
          </div>

          {/* Bottom Text */}
          <p className="text-lg text-gray-500 font-light mb-8">
            Convert to your local currency
          </p>

          {/* Additional Action Buttons */}
          <div className="space-y-4">
            <div>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-normal rounded-lg transition-all duration-300"
                onClick={handlePayInPYUSDClick}
              >
                Pay in PYUSD
              </Button>
            </div>
            
            <div>
              <Button 
                size="lg" 
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-4 text-lg font-normal rounded-lg transition-all duration-300"
                onClick={() => setShowAuthModal(true)}
              >
                Login / Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={handleCloseAuthModal}
        onAuthSuccess={handleAuthSuccess}
      />

      <PaymentProcessModal 
        isOpen={showPaymentProcessModal}
        onClose={handleClosePaymentProcessModal}
      />
    </>
  );
};

export default Hero;
