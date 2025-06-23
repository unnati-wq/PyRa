
import React from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface DashboardProps {
  onCreatePayment: () => void;
  onLogout: () => void;
}

const Dashboard = ({ onCreatePayment, onLogout }: DashboardProps) => {
  // Mock data - in a real app, this would come from your backend
  const userBalance = "156.73";
  const pendingPayments = [
    { id: 1, title: "Website Design", amount: "500.00", currency: "USD", pyusd: "500.00", status: "Pending", date: "2024-01-15" },
    { id: 2, title: "Logo Design", amount: "150.00", currency: "USD", pyusd: "150.00", status: "Pending", date: "2024-01-14" },
  ];

  const completedPayments = [
    { id: 3, title: "App Development", amount: "1200.00", currency: "USD", pyusd: "1200.00", status: "Paid", date: "2024-01-10" },
    { id: 4, title: "Consultation", amount: "75.00", currency: "EUR", pyusd: "81.52", status: "Paid", date: "2024-01-08" },
  ];

  return (
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
          <h2 className="text-lg font-medium text-black mb-2">Current Balance</h2>
          <p className="text-3xl font-normal text-black">{userBalance} PYUSD</p>
          <p className="text-sm text-gray-600 mt-1">Available for withdrawal</p>
        </div>

        {/* Pending Payments */}
        <div className="mb-8">
          <h2 className="text-xl font-medium text-black mb-4">Pending Payments</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
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
          </div>
        </div>

        {/* Completed Payments */}
        <div>
          <h2 className="text-xl font-medium text-black mb-4">Completed Payments</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
