import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import CustomPieChart from "../components/CustomPieChart";
import Title from "../components/Title";

export default function SummaryGlobalChart({ global }) {
  console.log("global", global);
  const confirmed = [
    {
      name: "Total Confirmed",
      value: global.TotalConfirmed,
    },
    {
      name: "New Confirmed",
      value: global.NewConfirmed,
    },
  ];
  const deaths = [
    {
      name: "Total Deaths",
      value: global.TotalConfirmed,
    },
    {
      name: "New Deaths",
      value: global.NewConfirmed,
    },
  ];
  const recovered = [
    {
      name: "Total Deaths",
      value: global.TotalConfirmed,
    },
    {
      name: "New Deaths",
      value: global.NewConfirmed,
    },
  ];
  return (
    <Container>
      <Row>
        <Col sm={12} lg={4} style={{ height: 250, marginTop: 10, marginBottom: 30 }}>
          <Title>Confirmed Cases</Title>
          <CustomPieChart data={confirmed} fill="#8884d8" />
        </Col>
        <Col sm={12} lg={4} style={{ height: 250, marginTop: 10, marginBottom: 30 }}>
          <Title>Death Cases</Title>
          <CustomPieChart data={deaths} fill="#ff6d6d" />
        </Col>
        <Col sm={12} lg={4} style={{ height: 250, marginTop: 10, marginBottom: 30 }}>
          <Title>Recovered Cases</Title>
          <CustomPieChart data={recovered} fill="#bcb800" />
        </Col>
      </Row>
    </Container>
  );
}
