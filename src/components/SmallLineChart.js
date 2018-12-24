import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Hours_48: 2200 },
  { name: 'Tue', Hours_48: 1280 },
  { name: 'Wed', Hours_48: 5000 },
  { name: 'Thu', Hours_48: 4780 },
  { name: 'Fri', Hours_48: 5890 },
  { name: 'Sat', Hours_48: 4390 },
  { name: 'Sun', Hours_48: 4490 },
  { name: 'Mon', Hours_48: 2200 },
  { name: 'Tue', Hours_48: 1280 },
  { name: 'Wed', Hours_48: 5000 },
  { name: 'Thu', Hours_48: 4780 },
  { name: 'Fri', Hours_48: 5890 },
  { name: 'Sat', Hours_48: 4390 },
  { name: 'Sun', Hours_48: 4490 },
  { name: 'Mon', Hours_48: 2200 },
  { name: 'Tue', Hours_48: 1280 },
  { name: 'Wed', Hours_48: 5000 },
  { name: 'Thu', Hours_48: 4780 },
  { name: 'Fri', Hours_48: 5890 },
  { name: 'Sat', Hours_48: 4390 },
  { name: 'Sun', Hours_48: 4490 },
  { name: 'Mon', Hours_48: 2200 },
  { name: 'Tue', Hours_48: 1280 },
  { name: 'Wed', Hours_48: 5000 },
  { name: 'Thu', Hours_48: 4780 },
  { name: 'Fri', Hours_48: 5890 },
  { name: 'Sat', Hours_48: 4390 },
  { name: 'Sun', Hours_48: 4490 },
  { name: 'Mon', Hours_48: 2200 },
  { name: 'Tue', Hours_48: 1280 },
  { name: 'Wed', Hours_48: 5000 },
  { name: 'Thu', Hours_48: 4780 },
  { name: 'Fri', Hours_48: 5890 },
  { name: 'Sat', Hours_48: 4390 },
  { name: 'Sun', Hours_48: 4490 },
  { name: 'Mon', Hours_48: 2200 },
  { name: 'Tue', Hours_48: 1280 },
  { name: 'Wed', Hours_48: 5000 },
  { name: 'Thu', Hours_48: 4780 },
  { name: 'Fri', Hours_48: 5890 },
  { name: 'Sat', Hours_48: 4390 },
  { name: 'Sun', Hours_48: 4490 },
];

function SmallLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer  className="title">
      <LineChart data={data} width={100} height={50} >
      {/* <XAxis dataKey="" /> */}
      {/* <YAxis /> */}
        {/* <CartesianGrid vertical={false} strokeDasharray="3 3" /> */}
        {/* <Tooltip /> */}
        {/* <Legend />  */}
        <Line type="monotone" dataKey="Hours_48" stroke="#587A2F" dot={false} strokeWidth={2}/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SmallLineChart;