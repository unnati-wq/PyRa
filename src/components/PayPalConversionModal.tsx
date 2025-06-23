
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface PayPalConversionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConversionSuccess: (pyusdAmount: number) => void;
  currentBalance: number;
}

const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'IN', name: 'India' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
];

const PayPalConversionModal = ({ isOpen, onClose, onConversionSuccess, currentBalance }: PayPalConversionModalProps) => {
  const [step, setStep] = useState<'country' | 'amount' | 'confirm' | 'success'>('country');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleCountrySelect = (countryCode: string) => {
    setSelectedCountry(countryCode);
    if (countryCode !== 'US') {
      setError('PayPal conversion is not available in your region');
      return;
    }
    setError('');
    setStep('amount');
  };

  const handleAmountSubmit = () => {
    const pyusdAmount = parseFloat(amount);
    if (pyusdAmount > currentBalance) {
      setError('Insufficient balance');
      return;
    }
    setError('');
    setStep('confirm');
  };

  const handleConfirm = () => {
    const pyusdAmount = parseFloat(amount);
    onConversionSuccess(pyusdAmount);
    setStep('success');
  };

  const handleClose = () => {
    setStep('country');
    setSelectedCountry('');
    setAmount('');
    setError('');
    onClose();
  };

  const calculateUSD = (pyusdAmount: number): string => {
    // Assuming 1 PYUSD = 1 USD for simplicity
    return pyusdAmount.toFixed(2);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gray-50">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-2xl font-medium text-black">
            Convert to USD via PayPal
          </DialogTitle>
        </DialogHeader>

        {step === 'country' && (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium text-black">
                Select your country
              </Label>
              <Select onValueChange={handleCountrySelect}>
                <SelectTrigger className="w-full h-12 bg-white border-gray-200 rounded-lg">
                  <SelectValue placeholder="Choose your country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
          </div>
        )}

        {step === 'amount' && (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="conversion-amount" className="text-sm font-medium text-black">
                Enter PYUSD amount to convert
              </Label>
              <Input
                id="conversion-amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full h-12 bg-white border-gray-200 rounded-lg text-black placeholder-gray-400"
              />
              <p className="text-sm text-gray-600">
                Available balance: {currentBalance.toFixed(2)} PYUSD
              </p>
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {amount && !error && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">You will receive</p>
                <p className="text-lg font-medium text-black">
                  ${calculateUSD(parseFloat(amount))} USD
                </p>
              </div>
            )}

            <Button 
              onClick={handleAmountSubmit}
              disabled={!amount || parseFloat(amount) <= 0}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-normal text-base h-12"
            >
              Continue
            </Button>
          </div>
        )}

        {step === 'confirm' && (
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">PYUSD Amount:</span>
                <span className="font-medium text-black">{amount} PYUSD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">USD Amount:</span>
                <span className="font-medium text-black">${calculateUSD(parseFloat(amount))} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Destination:</span>
                <span className="font-medium text-black">PayPal Account</span>
              </div>
            </div>
            
            <Button 
              onClick={handleConfirm}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-normal text-base h-12"
            >
              Confirm Transfer
            </Button>
          </div>
        )}

        {step === 'success' && (
          <div className="space-y-6 text-center">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">Transfer Successful!</h3>
              <p className="text-green-700 mb-4">
                {amount} PYUSD (${calculateUSD(parseFloat(amount))} USD) has been transferred to your PayPal account.
              </p>
              <p className="text-sm text-gray-600">
                The funds should appear in your PayPal account within 1-3 business days.
              </p>
            </div>
            
            <Button 
              onClick={handleClose}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-normal text-base h-12"
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PayPalConversionModal;
