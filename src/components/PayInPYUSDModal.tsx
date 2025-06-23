
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface PayInPYUSDModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentBalance: number;
  onBalanceUpdate: (newBalance: number) => void;
}

const PayInPYUSDModal = ({ isOpen, onClose, currentBalance, onBalanceUpdate }: PayInPYUSDModalProps) => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const paymentAmount = parseFloat(amount);
    
    if (paymentAmount > currentBalance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough PYUSD to make this payment",
        variant: "destructive",
      });
      return;
    }

    // Simulate payment processing
    const newBalance = currentBalance - paymentAmount;
    onBalanceUpdate(newBalance);
    
    toast({
      title: "Payment Sent!",
      description: `${amount} PYUSD sent successfully`,
    });

    // Reset form and close modal
    setRecipientAddress('');
    setAmount('');
    setDescription('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-50">
        <DialogHeader className="pb-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-medium text-black">
              Pay in PYUSD
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
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Available Balance</p>
            <p className="text-lg font-medium text-black">
              {currentBalance.toFixed(2)} PYUSD
            </p>
          </div>

          <div className="space-y-3">
            <Label htmlFor="recipient" className="text-sm font-medium text-black">
              Recipient Address
            </Label>
            <Input
              id="recipient"
              type="text"
              placeholder="Enter PYUSD wallet address"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              required
              className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
            />
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="amount" className="text-sm font-medium text-black">
              Amount (PYUSD)
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              step="0.01"
              min="0.01"
              max={currentBalance}
              className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="description" className="text-sm font-medium text-black">
              Description (Optional)
            </Label>
            <Input
              id="description"
              type="text"
              placeholder="Payment for..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-normal text-base h-12 mt-8"
            disabled={!recipientAddress || !amount || parseFloat(amount) <= 0}
          >
            Send Payment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PayInPYUSDModal;
