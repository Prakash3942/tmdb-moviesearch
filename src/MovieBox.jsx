import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src={API_IMG + poster_path}
          alt="movies_image"
        />
        <div className="card-body">
          <button onClick={handleShow} type="button" className="btn btn-dark">
            View More
          </button>
          <Modal show={show} onHide={handleClose} style={{ height: "600px" }}>
            <ModalHeader closeButton>
              <ModalTitle></ModalTitle>
            </ModalHeader>
            <ModalBody>
              <img
                className="card-img-top"
                style={{ width: "25rem", height: "18rem" }}
                src={API_IMG + poster_path}
                alt="movies_image"
              />
              <h3>{title}</h3>
              <h4>TMDB: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br />
              <br />
              <h6>Overview</h6>
              <p>{overview}</p>
            </ModalBody>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
