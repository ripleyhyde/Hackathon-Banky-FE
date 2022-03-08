import React from "react";
import { Card, Image } from "react-bootstrap";

function BeneficiaryItem() {
  return (
    <Card>
      <div className="beneficiaryCard">
        <Image
          className="logo"
          src="https://www.nbk.com/dam/jcr:94ce2d46-f836-4bde-b5dd-97005562f3e9/Website-NBK-Logo_800x800px.jpg"
        />
        <Card.Body>
          <Card.Title>Dave D Dave</Card.Title>
          <div>____________________</div>
          <Card.Text>KW44NBOK0000000000001000441011</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default BeneficiaryItem;
