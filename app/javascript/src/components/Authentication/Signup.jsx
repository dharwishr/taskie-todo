import React, { useState } from "react";

import authApi from "apis/auth";
import SignupForm from "components/Authentication/Form/Signup";

const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await authApi.signup({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      history.push("/");
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <SignupForm
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      setName={setName}
      setPassword={setPassword}
      setPasswordConfirmation={setPasswordConfirmation}
    />
  );
};

export default Signup;
