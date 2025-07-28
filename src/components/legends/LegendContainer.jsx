import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import LegendCard from "./LegendCard";

const LegendContainer = () => {
  const [search, setSearch] = useState("");
  // console.log(data);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  console.log(filteredData);
  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search legends..."
        onChange={handleChange}
      />
      <Container>
        <Row xs={1} md={2} lg={3} xl={4}>
          {filteredData.map((Legend) => (
            <LegendCard key={Legend.id} Legend={Legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
