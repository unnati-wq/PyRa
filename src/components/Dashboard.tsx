
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import PayPalConversionModal from './PayPalConversionModal';

interface DashboardProps {
  onCreatePayment: () => void;
  onLogout: () => void;
}

const Dashboard = ({ onCreatePayment, onLogout }: DashboardProps) => {
  const [showPayPalModal, setShowPayPalModal] = useState(false);
  const [userBalance, setUserBalance] = useState(156.73); // Starting balance for demo
  
  // Mock data - empty for new users, populated for existing users
  const [pendingPayments] = useState([
    { id: 1, title: "Website Design", amount: "500.00", currency: "USD", pyusd: "500.00", status: "Pending", date: "2024-01-15" },
    { id: 2, title: "Logo Design", amount: "150.00", currency: "USD", pyusd: "150.00", status: "Pending", date: "2024-01-14" },
  ]);

  const [completedPayments] = useState([
    { id: 3, title: "App Development", amount: "1200.00", currency: "USD", pyusd: "1200.00", status: "Paid", date: "2024-01-10" },
    { id: 4, title: "Consultation", amount: "75.00", currency: "EUR", pyusd: "81.52", status: "Paid", date: "2024-01-08" },
  ]);

  const handlePayPalConversion = () => {
    setShowPayPalModal(true);
  };

  const handleClosePayPalModal = () => {
    setShowPayPalModal(false);
  };

  const handleConversionSuccess = (pyusdAmount: number) => {
    setUserBalance(prev => prev - pyusdAmount);
    setShowPayPalModal(false);
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
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-normal"
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
                      <TableRow key={payment.id}>
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
    </>
  );
};

export default Dashboard;
