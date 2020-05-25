import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getData, setFromData } from "../tools/api";
import Button from '../components/Button';


export default function Main(props) {
  const [spread, setSpread] = React.useState([]);
  const handleGetData = () => setFromData(setSpread);

  return (
    <div className="App" style={{ width: "100%", height: 600 }}>
      {spread.length > 0 ? (
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
            <Line type="monotone" dataKey="Deaths" stroke="#ff6d6d"/>
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="Date"/>
            <YAxis dataKey="Confirmed" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <Button onClick={handleGetData}>Load Charts</Button>
      )}
    </div>
  );
}
