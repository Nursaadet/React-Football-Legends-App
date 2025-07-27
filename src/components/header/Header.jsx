import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <Container className="text-center mt-5">
      <Image
        src={logo}
        alt="Logo"
        width="150px"
        style={{
          filter: "drop-shadow(2px 4px 8px rgba(255, 255, 255, 1)) brightness(1.1)",
        }}
      />{" "}
      <br />
      <h1 className="my-2 title">Football LEGENDS</h1>
    </Container>
  );
};

export default Header;
