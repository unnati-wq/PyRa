
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import PayPalConversionModal from './PayPalConversionModal';
import PaymentLinkModal from './PaymentLinkModal';
import PayInPYUSDModal from './PayInPYUSDModal';

interface Payment {
  id: string;
  title: string;
  amount: string;
  currency: string;
  pyusd: string;
  status: string;
  date: string;
  paymentLink?: string;
}

interface DashboardProps {
  onCreatePayment: () => void;
  onLogout: () => void;
  userBalance: number;
  pendingPayments: Payment[];
  completedPayments: Payment[];
  onBalanceUpdate: (newBalance: number) => void;
}

const Dashboard = ({ 
  onCreatePayment, 
  onLogout, 
  userBalance, 
  pendingPayments, 
  completedPayments, 
  onBalanceUpdate 
}: DashboardProps) => {
  const [showPayPalModal, setShowPayPalModal] = useState(false);
  const [showPaymentLinkModal, setShowPaymentLinkModal] = useState(false);
  const [showPayInPYUSDModal, setShowPayInPYUSDModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const handlePayPalConversion = () => {
    setShowPayPalModal(true);
  };

  const handleClosePayPalModal = () => {
    setShowPayPalModal(false);
  };

  const handleConversionSuccess = (pyusdAmount: number) => {
    const newBalance = userBalance - pyusdAmount;
    onBalanceUpdate(newBalance);
    setShowPayPalModal(false);
  };

  const handlePaymentClick = (payment: Payment) => {
    // Generate payment link if not exists
    const linkId = Math.random().toString(36).substring(7);
    const paymentWithLink = {
      ...payment,
      paymentLink: payment.paymentLink || `https://pyra.app/pay/${linkId}`
    };
    setSelectedPayment(paymentWithLink);
    setShowPaymentLinkModal(true);
  };

  const handleClosePaymentLinkModal = () => {
    setShowPaymentLinkModal(false);
    setSelectedPayment(null);
  };

  const handlePayInPYUSD = () => {
    setShowPayInPYUSDModal(true);
  };

  const handleClosePayInPYUSDModal = () => {
    setShowPayInPYUSDModal(false);
  };

  return (
    <>
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-medium text-black mb-2">Dashboard</h1>
              <p className="text-gray-600 font-light">Manage your payments and track your balance</p>
            </div>
            <div className="flex gap-4">
              <Button 
                onClick={handlePayInPYUSD}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-normal"
              >
                Pay in PYUSD
              </Button>
              <Button 
                onClick={onCreatePayment}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-normal"
              >
                Create Payment Link
              </Button>
              <Button 
                onClick={onLogout}
                variant="outline"
                className="border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-normal"
              >
                Logout
              </Button>
            </div>
          </div>

          {/* Balance Card */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium text-black mb-2">Current Balance</h2>
                <p className="text-3xl font-normal text-black">{userBalance.toFixed(2)} PYUSD</p>
                <p className="text-sm text-gray-600 mt-1">Available for withdrawal</p>
              </div>
              <Button 
                onClick={handlePayPalConversion}
                disabled={userBalance <= 0}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-normal disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Convert to USD via PayPal
              </Button>
            </div>
          </div>

          {/* Pending Payments */}
          <div className="mb-8">
            <h2 className="text-xl font-medium text-black mb-4">Pending Payments</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {pendingPayments.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-medium text-black">Title</TableHead>
                      <TableHead className="font-medium text-black">Amount</TableHead>
                      <TableHead className="font-medium text-black">PYUSD</TableHead>
                      <TableHead className="font-medium text-black">Status</TableHead>
                      <TableHead className="font-medium text-black">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingPayments.map((payment) => (
                      <TableRow 
                        key={payment.id} 
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => handlePaymentClick(payment)}
                      >
                        <TableCell className="font-medium text-black">{payment.title}</TableCell>
                        <TableCell className="text-gray-700">{payment.amount} {payment.currency}</TableCell>
                        <TableCell className="text-gray-700">{payment.pyusd} PYUSD</TableCell>
                        <TableCell>
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                            {payment.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-600">{payment.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500 font-light">No pending payments yet</p>
                  <p className="text-sm text-gray-400 mt-2">Create a payment link to start receiving payments</p>
                </div>
              )}
            </div>
          </div>

          {/* Completed Payments */}
          <div>
            <h2 className="text-xl font-medium text-black mb-4">Completed Payments</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {completedPayments.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-medium text-black">Title</TableHead>
                      <TableHead className="font-medium text-black">Amount</TableHead>
                      <TableHead className="font-medium text-black">PYUSD</TableHead>
                      <TableHead className="font-medium text-black">Status</TableHead>
                      <TableHead className="font-medium text-black">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {completedPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium text-black">{payment.title}</TableCell>
                        <TableCell className="text-gray-700">{payment.amount} {payment.currency}</TableCell>
                        <TableCell className="text-gray-700">{payment.pyusd} PYUSD</TableCell>
                        <TableCell>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {payment.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-gray-600">{payment.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500 font-light">No completed payments yet</p>
                  <p className="text-sm text-gray-400 mt-2">Your successful transactions will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <PayPalConversionModal 
        isOpen={showPayPalModal}
        onClose={handleClosePayPalModal}
        onConversionSuccess={handleConversionSuccess}
        currentBalance={userBalance}
      />

      {selectedPayment && (
        <PaymentLinkModal 
          isOpen={showPaymentLinkModal}
          onClose={handleClosePaymentLinkModal}
          paymentLink={selectedPayment.paymentLink || ''}
          title={selectedPayment.title}
          amount={selectedPayment.amount}
          currency={selectedPayment.currency}
          pyusdAmount={selectedPayment.pyusd}
        />
      )}

      <PayInPYUSDModal 
        isOpen={showPayInPYUSDModal}
        onClose={handleClosePayInPYUSDModal}
        currentBalance={userBalance}
        onBalanceUpdate={onBalanceUpdate}
      />
    </>
  );
};

export default Dashboard;
