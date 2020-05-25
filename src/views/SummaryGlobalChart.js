import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import CustomPieChart from "../components/CustomPieChart";

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
        <Col md={4} style={{ height: 250, marginTop: 10, marginBottom: 10 }}>
          <CustomPieChart data={confirmed} fill="#8884d8" />
        </Col>
        <Col md={4} style={{ height: 250, marginTop: 10, marginBottom: 10 }}>
          <CustomPieChart data={deaths} fill="#ff6d6d" />
        </Col>
        <Col md={4} style={{ height: 250, marginTop: 10, marginBottom: 10 }}>
          <CustomPieChart data={recovered} fill="#bcb800" />
        </Col>
      </Row>
    </Container>
  );
}
