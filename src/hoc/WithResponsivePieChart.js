import React from 'react'
import {
  PieChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function WithResponsivePieChart(props) {
  return (
    <ResponsiveContainer style={{padding:10}}>
      <PieChart style={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        {props.children}
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
