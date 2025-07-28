import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const LegendCard = ({ Legend }) => {
  const [show, setShow] = useState(false);
//   console.log(show);
//   console.log(Legend);
  return (
    <Col>
      <Card onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Img variant="top" src={Legend.img} />
        ) : (
          <>
            <Card.Header>
              <Card.Title>{Legend.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto">
              {Legend.statistics.map((item) => (
                <li className="list-unstyled h5 text-start">⚽️{item} </li>
              ))}
            </ul>
            <span>{Legend.official_career}</span>
          </>
        )}
      </Card>
    </Col>
  );
};

export default LegendCard;
