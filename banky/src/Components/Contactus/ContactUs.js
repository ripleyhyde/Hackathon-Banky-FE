import "./Contactus.css";
import React from "react";
import { Button, Card, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Row lg={5} className="r">
      <Card className="cs my-4 p-4 rounded h-90 text-center">
        <Card.Img
          className="card-image"
          variant="top"
          src="https://en.pimg.jp/068/772/527/1/68772527.jpg"
        />
        <Card.Body>
          <Card.Title className="card-text">
            Live Chat Talk to a representative who can help
          </Card.Title>
          <Card.Text className="card-text">
            Chat Hours Monday–Friday, 7:00 a.m.–Midnight ET Saturday–Sunday,
            8:00 a.m.–9 p.m. ET
          </Card.Text>
          <Card.Text className="card-text">
            To chat with a representative, sign on to online banking and from
            “Customer Service” on the top, scroll down to “Live Chat.”
          </Card.Text>
          <Button className="buttons">Chat</Button>
        </Card.Body>
      </Card>
      <Card className="cs my-4 p-4 rounded h-90 text-center">
        <Card.Img
          className="card-image"
          variant="top"
          src="https://image.shutterstock.com/image-vector/gpsnavigator-pin-checking-red-color-260nw-565139848.jpg"
        />
        <Card.Body>
          <Card.Title className="card-text">Locations</Card.Title>
          <Card.Text className="card-text">
            We’re serving clients at all of our ATMs, most drive-thrus and by
            appointment at most branches. For safe deposit box access, contact
            us.
          </Card.Text>
          <Card.Link href="#">Find Locations</Card.Link> <br /> <br />
          <Card.Link href="#">Schedule an Appointment</Card.Link>
        </Card.Body>
      </Card>

      <Card className="cs my-4 p-4 rounded h-90 text-center">
        <Card.Img
          className="card-image"
          variant="top"
          src="https://as2.ftcdn.net/v2/jpg/00/83/31/09/1000_F_83310923_XCjZaq8DOKWuDyGT0FMtaJ0LvFBkUsss.jpg"
        />
        <Card.Body>
          <Card.Title className="card-text">
            Call Us 24/7 customer service
          </Card.Title>
          <Card.Text className="card-text">
            Check balances, deposit checks, pay bills and more – easily and
            securely, without leaving home.
          </Card.Text>
          <Button className="buttons">Get Started</Button>
          <Card.Text className="card-text">Need Help?</Card.Text>
          <Card.Link href="#">1805805</Card.Link> <br />
        </Card.Body>
      </Card>

      <Card className="cs my-4 p-4 rounded h-90 text-center">
        <Card.Img
          className="card-image"
          variant="top"
          src="https://thumbs.dreamstime.com/b/dollar-sign-icon-isolated-metallic-grunge-abstract-red-round-button-illustration-dollar-sign-icon-metallic-grunge-abstract-red-167325882.jpg"
        />
        <Card.Body>
          <Card.Title className="card-text">Make a Payment</Card.Title> <br />{" "}
          <br />
          <Card.Link href="#" className="card-text">
            Make a Cridet Card Payment
          </Card.Link>{" "}
          <br /> <br />
          <Card.Link href="#" className="card-text">
            Make a Transfer
          </Card.Link>{" "}
          <br /> <br />
          <Card.Link href="#" className="card-text">
            Make a QuickPay Payment
          </Card.Link>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default ContactUs;
