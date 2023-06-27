import React from 'react'
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar, CartesianGrid } from 'recharts'

const data = [
    {
      name: "January",
      margin: 4000,
      profit: 2400
    },
    {
      name: "Feburary",
      margin: 3000,
      profit: 1398
    },
    {
      name: "March",
      margin: 2000,
      profit: 9800
    },
    {
      name: "April",
      margin: 2780,
      profit: 3908
    },
    {
      name: "May",
      margin: 1890,
      profit: 4800
    },
    {
      name: "June",
      margin: 2390,
      profit: 3800
    }
  ];
function chart() {
    return (
        <ResponsiveContainer>
            <BarChart width={400} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="profit" fill="#005952" />
                <Bar dataKey="margin" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default chart