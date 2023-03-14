import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalOfDetails(props) {
  const { title, image, price, description } = props.product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <img width={200} src={image} className="p-2 mx-auto pt-4" alt="" />

        <Modal.Title className="px-3">{title}</Modal.Title>

        <Modal.Body>{description}</Modal.Body>
        <h4 className="fw-bold text-center">Price: ${price}</h4>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOfDetails;
