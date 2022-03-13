import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://en.pimg.jp/068/772/527/1/68772527.jpg"
        />
        <Card.Body>
          <Card.Title centered>
            Live Chat Talk to a representative who can help
          </Card.Title>
          <Card.Text>
            Chat Hours Monday–Friday, 7:00 a.m.–Midnight ET Saturday–Sunday,
            8:00 a.m.–9 p.m. ET
          </Card.Text>
          <Card.Text>
            To chat with a representative, sign on to online banking and from
            “Customer Service” on the top, scroll down to “Live Chat.”
          </Card.Text>
          <Button variant="primary">Chat</Button>
        </Card.Body>
      </Card>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://image.shutterstock.com/image-vector/gpsnavigator-pin-checking-red-color-260nw-565139848.jpg"
          />
          <Card.Body>
            <Card.Title centered>Locations</Card.Title>
            <Card.Text>
              We’re serving clients at all of our ATMs, most drive-thrus and by
              appointment at most branches. For safe deposit box access, contact
              us.
            </Card.Text>
            <Card.Link href="#">Find Locations</Card.Link> <br /> <br />
            <Card.Link href="#">Schedule an Appointment</Card.Link>
          </Card.Body>
        </Card>
        <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://as2.ftcdn.net/v2/jpg/00/83/31/09/1000_F_83310923_XCjZaq8DOKWuDyGT0FMtaJ0LvFBkUsss.jpg"
          />
          <Card.Body>
            <Card.Title centered>Call Us 24/7 customer service</Card.Title>
            <Card.Text>
              Check balances, deposit checks, pay bills and more – easily and
              securely, without leaving home.
            </Card.Text>
            <Button variant="primary">Get Started</Button>
            <Card.Text>Need Help?</Card.Text>
            <Card.Link href="#">1805805</Card.Link> <br />
          </Card.Body>
        </Card>
      </div>{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://thumbs.dreamstime.com/b/dollar-sign-icon-isolated-metallic-grunge-abstract-red-round-button-illustration-dollar-sign-icon-metallic-grunge-abstract-red-167325882.jpg"
          />
          <Card.Body>
            <Card.Title centered>Make a Payment</Card.Title> <br /> <br />
            <Card.Link href="#">
              Make a Cridet Card Payment
            </Card.Link> <br /> <br />
            <Card.Link href="#">Make a Transfer</Card.Link> <br /> <br />
            <Card.Link href="#">Make a QuickPay Payment</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
