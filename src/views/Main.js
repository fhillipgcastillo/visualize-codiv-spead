import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend  } from "recharts";
import axios from 'axios';

export default function Main(props) {
  const [spread, setSpread] = React.useState([]);
  const apiUrl = "https://api.covid19api.com/country/dominican-republic";

  const handleGetData = () => axios.get(apiUrl, {contentType: "json"}).then(res=> {
    console.log('res api', res)
    setSpread(res.data);
  });
  
  return (
    <div className="App">
      {spread.length > 0 ? (
        <LineChart width={1200} height={800}  data={spread}>
          <Line type="monotone" dataKey="Confirmed" stroke="#8884d8"/>
          <Line type="monotone" dataKey="Active" />
          <Line type="monotone" dataKey="Recovered" />
          <Line type="monotone" dataKey="Deaths" />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" />
          <XAxis />
          <YAxis dataKey="Confirmed" />
        </LineChart>
      ) : (
        <button onClick={handleGetData}>Load Charts</button>
      )}
    </div>
  );
}
