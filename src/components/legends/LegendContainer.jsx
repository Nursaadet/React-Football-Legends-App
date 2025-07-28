import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import LegendCard from "./LegendCard";

const LegendContainer = () => {
  const [show, setShow] = useState(false);
  console.log(data);
  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." />
      <Container>
        <Row xs={1} md={2} lg={3} xl={4}>
          {data.map((Legend) => (
            <LegendCard Legend ={Legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
