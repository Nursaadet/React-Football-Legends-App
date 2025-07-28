import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState, } from "react";

const LegendContainer = () => {
  const [show, setShow] = useState(false);
  console.log(data);
  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." />
      <Container>
        <Row xs={1} md={2} lg={3} xl={4}>
          {data.map((Legend) => (
            <Col>
              <Card onClick={()=> setShow(!show)}>
                {!show ? (
                  <Card.Img variant="top" src={Legend.img} />
                ) : (
                  <>
                    <Card.Header>
                      <Card.Title>{Legend.name}</Card.Title>
                    </Card.Header>
                    <ul className="m-auto">
                      {Legend.statistics.map((item) => (
                        <li className="list-unstyled h5 text-start">
                          ⚽️{item}{" "}
                        </li>
                      ))}
                    </ul>
                    <span>{Legend.official_career}</span>
                  </>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
