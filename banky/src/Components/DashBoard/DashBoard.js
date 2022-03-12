import "./DashBoard.css";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";

const DashBoard = () => {
  return (
    <Row lg={3}>
      <Card className="cards my-4 p-4 rounded h-90 text-center">
        <Card.Body>
          <Card.Title>Quick Pay</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Links</Card.Subtitle>
          <Card.Text>
            <div>
              <strong>7</strong>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cards my-4 p-4 rounded h-90 text-center">
        <Card.Body>
          <Card.Title>Transfers: 5</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Total Incoming
          </Card.Subtitle>
          <Card.Text>
            <div>
              <strong>KD 6,000.00</strong>
            </div>
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">
            Total Outgoing
          </Card.Subtitle>
          <Card.Text>
            <div>
              <strong>KD 3,000.00</strong>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cards my-4 p-4 rounded h-90 text-center">
        <Card.Title>Number of Beneficiaries: 5</Card.Title>
        <Link to="/beneficiaries/all">
          <button className="buttons">View Beneficiaries</button>
        </Link>
      </Card>
      <Card className="cards my-4 p-4 rounded h-90 text-center">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Total Accounts Balance
          </Card.Subtitle>
          <Card.Text>
            <div>
              <strong>KD 10,500.00</strong>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default DashBoard;
