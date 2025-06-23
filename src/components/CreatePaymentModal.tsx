
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CreatePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePaymentModal = ({ isOpen, onClose }: CreatePaymentModalProps) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating payment link:', { title, amount });
    // Here you would typically make an API call to create the payment link
    // For now, we'll just close the modal
    onClose();
  };

  return (
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
              placeholder=""
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
            <Input
              id="amount"
              type="number"
              placeholder=""
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-normal text-base h-12 mt-8"
          >
            Generate Link
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePaymentModal;
