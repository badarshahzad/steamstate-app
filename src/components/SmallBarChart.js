import React from "react";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import BarChart from "recharts/lib/chart/BarChart";
import Bar from "recharts/lib/cartesian/Bar";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";

const data = [
  { name: "Mon", Hours_48: 2200 },
  { name: "Tue", Hours_48: 1280 },
  { name: "Wed", Hours_48: 5000 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Mon", Hours_48: 2200 },
  { name: "Tue", Hours_48: 1280 },
  { name: "Wed", Hours_48: 5000 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Mon", Hours_48: 2200 },
  { name: "Tue", Hours_48: 1280 },
  { name: "Wed", Hours_48: 5000 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Mon", Hours_48: 2200 },
  { name: "Tue", Hours_48: 1280 },
  { name: "Wed", Hours_48: 5000 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Mon", Hours_48: 2200 },
  { name: "Tue", Hours_48: 1280 },
  { name: "Wed", Hours_48: 5000 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Mon", Hours_48: 2200 },
  { name: "Tue", Hours_48: 1280 },
  { name: "Wed", Hours_48: 5000 },
  { name: "Thu", Hours_48: 4780 },
  { name: "Thu", Hours_48: 4780 }
];

function SmallBarChart(props) {
  const newData = props.data.slice(0, 30);
  return (
    <ResponsiveContainer className="title">
      <BarChart width={150} height={40} data={newData}>
        <Tooltip />
        <Bar dataKey="peak_player" fill="#587A2F" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SmallBarChart;
