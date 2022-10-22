import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { singIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        // navigate(from, { replace: true });
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified! Please veryfy your Email Address"
          );
        }
      })
      .catch((error) => {
        console.error("error", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Text className="text-danger">{error}</Form.Text>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
