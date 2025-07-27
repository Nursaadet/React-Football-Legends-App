import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { Container, Row, Col } from "react-bootstrap";
import {Card, Button, } from "react-bootstrap"

const LegendContainer = () => {
  console.log(data);
  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." />
      <Container>
        <Row>
          {data.map((Legend)=> (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
