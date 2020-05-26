import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import CustomPieChart from "../components/CustomPieChart";
import Title from "../components/Title";

export default function SummaryGlobalChart({ global }) {
  const confirmed = [
    {
      name: "Total",
      value: global.TotalConfirmed,
    },
    {
      name: "New",
      value: global.NewConfirmed,
    },
  ];
  const deaths = [
    {
      name: "Total",
      value: global.TotalDeaths,
    },
    {
      name: "New",
      value: global.NewDeaths,
    },
  ];
  const recovered = [
    {
      name: "Total",
      value: global.TotalRecovered,
    },
    {
      name: "New",
      value: global.NewRecovered,
    },
  ];
  return (
    <Container style={{margin: "25px auto"}}>
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
