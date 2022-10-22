import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { cresteUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.PhotoURL.value;
    const password = form.password.value;
    // console.log(name, email, PhotoURL, password);

    cresteUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("please verify your Email Address");
      })
      .catch((error) => {
        console.error("error", error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((errror) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error("error", error));
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control name="name" type="name" placeholder="Your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="PhotoURL" type="text" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            label={
              <>
                Accept{" "}
                <Link to="/terms" style={{ textDecoration: "none" }}>
                  Terms & Consitions
                </Link>
              </>
            }
          />
        </Form.Group>

        <Form.Text className="text-danger">{error}</Form.Text>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
