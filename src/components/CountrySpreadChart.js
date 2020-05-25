import React from "react";

export default function CountrySpreadChart(props) {
  const [spread, setSpread] = React.useState([]);

  return (
    <ResponsiveContainer>
      <LineChart
        data={spread}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
      >
        <Line type="monotone" dataKey="Confirmed" stroke="#8884d8" />
        <Line type="monotone" dataKey="Active" stroke="#0ec40e" />
        <Line type="monotone" dataKey="Recovered" stroke="#bcb800" />
        <Line type="monotone" dataKey="Deaths" stroke="#ff6d6d" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="Date" />
        <YAxis dataKey="Confirmed" />
      </LineChart>
    </ResponsiveContainer>
  );
}
