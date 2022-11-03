import React, { useState } from "react";

import authApi from "apis/auth";
import { setAuthHeaders } from "apis/axios";
import LoginForm from "components/Authentication/Form/Login";
import { setToLocalStorage } from "utils/storage";

const Login = () => {

  const handleSubmit = async event => {
    try {
      const response = await authApi.login({...event});
      setToLocalStorage({
        authToken: response.data.authentication_token,
        email: event.email,
        userId: response.data.id,
        userName: response.data.name,
      });
      setAuthHeaders();
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <LoginForm
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
