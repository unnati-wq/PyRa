
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Smartphone, ArrowLeft } from 'lucide-react';

interface PaymentProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentProcessModal = ({ isOpen, onClose }: PaymentProcessModalProps) => {
  const [step, setStep] = useState<'enter-link' | 'choose-payment' | 'login' | 'card-payment'>('enter-link');
  const [paymentLink, setPaymentLink] = useState('');
  const [paymentData, setPaymentData] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userBalance, setUserBalance] = useState(156.73);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const { toast } = useToast();

  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentLink) return;

    // Mock payment data extraction from link
    const mockPaymentData = {
      title: "Website Design",
      amount: "500.00",
      currency: "USD",
      pyusdAmount: "500.00"
    };
    
    setPaymentData(mockPaymentData);
    setStep('choose-payment');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    setIsLoggedIn(true);
    setStep('choose-payment');
    toast({
      title: "Logged in successfully",
      description: "You can now pay with your PYUSD balance",
    });
  };

  const handlePayWithBalance = () => {
    const amount = parseFloat(paymentData.pyusdAmount);
    if (amount > userBalance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough PYUSD. Please pay the remaining with card.",
        variant: "destructive",
      });
      setStep('card-payment');
      return;
    }

    // Process payment with balance
    toast({
      title: "Payment Successful!",
      description: `${paymentData.pyusdAmount} PYUSD sent successfully`,
    });
    onClose();
    resetModal();
  };

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock card payment processing
    toast({
      title: "Payment Successful!",
      description: `${paymentData.amount} ${paymentData.currency} payment completed`,
    });
    onClose();
    resetModal();
  };

  const resetModal = () => {
    setStep('enter-link');
    setPaymentLink('');
    setPaymentData(null);
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleBack = () => {
    if (step === 'login' || step === 'card-payment') {
      setStep('choose-payment');
    } else if (step === 'choose-payment') {
      setStep('enter-link');
    }
  };

  const handleClose = () => {
    onClose();
    resetModal();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gray-50">
        <DialogHeader className="pb-6">
          <div className="flex items-center justify-between">
            {step !== 'enter-link' && (
              <button 
                onClick={handleBack}
                className="text-gray-400 hover:text-gray-600 mr-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <DialogTitle className="text-2xl font-medium text-black flex-1">
              {step === 'enter-link' && 'Pay in PYUSD'}
              {step === 'choose-payment' && 'Choose Payment Method'}
              {step === 'login' && 'Login to Your Account'}
              {step === 'card-payment' && 'Pay with Card'}
            </DialogTitle>
            <button 
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </DialogHeader>

        {step === 'enter-link' && (
          <form onSubmit={handleLinkSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="payment-link" className="text-sm font-medium text-black">
                Enter Payment Link
              </Label>
              <Input
                id="payment-link"
                type="url"
                placeholder="https://pyra.app/pay/..."
                value={paymentLink}
                onChange={(e) => setPaymentLink(e.target.value)}
                required
                className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-normal text-base h-12"
              disabled={!paymentLink}
            >
              Continue
            </Button>
          </form>
        )}

        {step === 'choose-payment' && paymentData && (
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-black mb-2">{paymentData.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                Amount: {paymentData.amount} {paymentData.currency}
              </p>
              <p className="text-sm text-gray-600">
                PYUSD Amount: {paymentData.pyusdAmount} PYUSD
              </p>
            </div>

            {isLoggedIn && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Available Balance</p>
                <p className="text-lg font-medium text-black">
                  {userBalance.toFixed(2)} PYUSD
                </p>
              </div>
            )}

            <div className="space-y-3">
              {!isLoggedIn ? (
                <>
                  <Button 
                    onClick={() => setStep('login')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-normal text-base h-12"
                  >
                    Login to Pay with PYUSD Balance
                  </Button>
                  <Button 
                    onClick={() => setStep('card-payment')}
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 py-3 rounded-lg font-normal text-base h-12"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay with Card
                  </Button>
                </>
              ) : (
                <>
                  {userBalance >= parseFloat(paymentData.pyusdAmount) ? (
                    <Button 
                      onClick={handlePayWithBalance}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-normal text-base h-12"
                    >
                      Pay with PYUSD Balance
                    </Button>
                  ) : (
                    <p className="text-sm text-red-600 text-center">
                      Insufficient balance. Please pay with card.
                    </p>
                  )}
                  <Button 
                    onClick={() => setStep('card-payment')}
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 py-3 rounded-lg font-normal text-base h-12"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pay with Card
                  </Button>
                </>
              )}
            </div>
          </div>
        )}

        {step === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-medium text-black">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="password" className="text-sm font-medium text-black">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-normal text-base h-12"
              disabled={!email || !password}
            >
              Login
            </Button>
          </form>
        )}

        {step === 'card-payment' && paymentData && (
          <form onSubmit={handleCardPayment} className="space-y-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-medium text-black mb-2">Payment Amount</h3>
              <p className="text-lg font-medium text-black">
                {paymentData.amount} {paymentData.currency}
              </p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="card-number" className="text-sm font-medium text-black">
                Card Number
              </Label>
              <Input
                id="card-number"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label htmlFor="expiry" className="text-sm font-medium text-black">
                  Expiry Date
                </Label>
                <Input
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                  className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="cvv" className="text-sm font-medium text-black">
                  CVV
                </Label>
                <Input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-normal text-base h-12"
                disabled={!cardNumber || !expiryDate || !cvv}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Pay {paymentData.amount} {paymentData.currency}
              </Button>
              
              <Button 
                type="button"
                variant="outline"
                className="w-full border-gray-300 text-gray-700 py-3 rounded-lg font-normal text-base h-12"
                disabled={!cardNumber || !expiryDate || !cvv}
              >
                <Smartphone className="w-4 h-4 mr-2" />
                Pay with Apple Pay
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentProcessModal;
