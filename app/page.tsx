"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LayoutDashboard, TrendingUp } from 'lucide-react';

const data = [
  { year: '2022', sales: 4000, revenue: 2400 },
  { year: '2023', sales: 3000, revenue: 1398 },
  { year: '2024', sales: 5500, revenue: 3800 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-8 flex items-center gap-3">
        <LayoutDashboard className="text-blue-600" size={32} />
        <h1 className="text-3xl font-bold text-gray-800">Sales Analytics Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="text-green-500" />
            <h2 className="text-xl font-semibold">Performance (2022-2024)</h2>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" name="Sales Units" />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-lg flex flex-col justify-center">
          <h3 className="text-2xl font-light">Total Growth</h3>
          <p className="text-5xl font-bold mt-2">+45%</p>
          <p className="mt-4 text-blue-100 italic">Projected growth based on 2024 performance.</p>
        </div>
      </div>
    </div>
  );
}