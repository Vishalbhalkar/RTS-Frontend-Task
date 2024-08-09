import React from 'react';
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', questions: 5 },
  { name: 'Tue', questions: 6 },
  { name: 'Wed', questions: 8 },
  { name: 'Thu', questions: 29 },
  { name: 'Fri', questions: 4 },
  { name: 'Sat', questions: 1 },
  { name: 'Sun', questions: 0 },
];

const MyLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <Tooltip />
      <Line type="linear" dataKey="questions" stroke="#ff4d4f" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
);

export default MyLineChart;
