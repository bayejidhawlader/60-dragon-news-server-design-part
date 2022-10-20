import React from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button className="my-2" variant="outline-primary">
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <h5 className="mt-5">Find us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whatssapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twich
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div></div>
    </div>
  );
};

export default RightSideNav;
