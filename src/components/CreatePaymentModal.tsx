
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PaymentLinkModal from './PaymentLinkModal';

interface CreatePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePaymentModal = ({ isOpen, onClose }: CreatePaymentModalProps) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');

  // Mock conversion rates to PYUSD (in a real app, these would come from an API)
  const conversionRates = {
    USD: 1.0,
    EUR: 0.92,
    INR: 83.12
  };

  const calculatePYUSD = (): string => {
    if (!amount) return '0';
    const baseAmount = parseFloat(amount);
    const rate = conversionRates[currency as keyof typeof conversionRates];
    return (baseAmount / rate).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating payment link:', { title, amount, currency });
    
    // Generate a mock payment link
    const linkId = Math.random().toString(36).substring(7);
    const link = `https://pyra.app/pay/${linkId}`;
    setGeneratedLink(link);
    setShowLinkModal(true);
  };

  const handleCloseLinkModal = () => {
    setShowLinkModal(false);
    onClose();
    // Reset form
    setTitle('');
    setAmount('');
    setCurrency('USD');
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md bg-gray-50">
          <DialogHeader className="pb-6">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-medium text-black">
                Create Payment Link
              </DialogTitle>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="title" className="text-sm font-medium text-black">
                Title
              </Label>
              <Input
                id="title"
                type="text"
                placeholder="Payment description"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="amount" className="text-sm font-medium text-black">
                Amount
              </Label>
              <div className="flex gap-3">
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="flex-1 h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
                />
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="w-24 h-12 bg-white border-gray-200 rounded-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="INR">INR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {amount && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">You will receive</p>
                <p className="text-lg font-medium text-black">
                  {calculatePYUSD()} PYUSD
                </p>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-normal text-base h-12 mt-8"
            >
              Generate Link
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <PaymentLinkModal 
        isOpen={showLinkModal}
        onClose={handleCloseLinkModal}
        paymentLink={generatedLink}
        title={title}
        amount={amount}
        currency={currency}
        pyusdAmount={calculatePYUSD()}
      />
    </>
  );
};

export default CreatePaymentModal;
