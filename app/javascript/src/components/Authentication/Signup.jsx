import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import authApi from "apis/auth";

import SignupForm from "components/Authentication/Form/Signup";

const Signup = () => {
  const history = useHistory()

  const handleSubmit = async event => {
    try {
      await authApi.signup({...event});
      history.push('/')
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <SignupForm
      handleSubmit={handleSubmit}
    />
  );
};

export default Signup;
