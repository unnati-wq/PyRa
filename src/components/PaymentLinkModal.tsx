
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy, Share, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PaymentLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
  paymentLink: string;
  title: string;
  amount: string;
  currency: string;
  pyusdAmount: string;
}

const PaymentLinkModal = ({ 
  isOpen, 
  onClose, 
  onBack,
  paymentLink, 
  title, 
  amount, 
  currency, 
  pyusdAmount 
}: PaymentLinkModalProps) => {
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(paymentLink);
      toast({
        title: "Link copied!",
        description: "Payment link has been copied to clipboard",
      });
      // Close modal after successful copy
      onClose();
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy link to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Payment Request: ${title}`,
          text: `Please pay ${amount} ${currency} for ${title}`,
          url: paymentLink,
        });
        onClose();
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback to copy
      handleCopy();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-50">
        <DialogHeader className="pb-6">
          <div className="flex items-center justify-between">
            {onBack && (
              <button 
                onClick={onBack}
                className="text-gray-400 hover:text-gray-600 mr-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <DialogTitle className="text-2xl font-medium text-black flex-1">
              Payment Link Generated
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
        
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-medium text-black mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              Amount: {amount} {currency}
            </p>
            <p className="text-sm text-gray-600">
              You'll receive: {pyusdAmount} PYUSD
            </p>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-black">
              Payment Link
            </Label>
            <div className="flex gap-2">
              <div className="flex-1 p-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 break-all">
                {paymentLink}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleCopy}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-black border border-gray-300"
              variant="outline"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Link
            </Button>
            <Button 
              onClick={handleShare}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Label = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <label className={className}>{children}</label>
);

export default PaymentLinkModal;
