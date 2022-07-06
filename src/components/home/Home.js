import React from "react";
import { Card, Container } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Container>
        <Card style={{ width: "100%", marginTop: "5%", padding: "" }}>
          <Card.Img
            style={{ width: "10%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCiCTFXBV3Ba4YnfhVKxnPk-wJNeQwLB2Ug&usqp=CAU"
          ></Card.Img>
          <Card.Body>
            <Card.Title>Home Page</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
