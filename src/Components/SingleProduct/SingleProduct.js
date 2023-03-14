import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./SingleProduct.css";
import ModalOfDetails from "../ModalOfDetails/ModalOfDetails";

function SingleProduct(props) {
  // console.log(props.product);
  return (
    <div data-aos="flip-right" className="col-md-3 mt-5">
      <Card style={{ width: "20rem", height: "100%" }}>
        <Card.Img variant="top" src={props.product.image} className="p-5" />
        <Card.Body>
          <Card.Title>{props.product.title.slice(0, 10)}</Card.Title>
          <Card.Text>Price: ${props.product.price}</Card.Text>
          <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
            <Button onClick={props.setCartCount} variant="success">
              Add to cart
            </Button>
            {/* <Button variant="info">Details</Button> */}
            <ModalOfDetails product={props.product}></ModalOfDetails>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleProduct;
