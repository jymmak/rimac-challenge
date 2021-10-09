import React from "react";
import BannerLogin from "../elements/BannerLogin";
import LoginForm from "../elements/forms/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="container_inline">
      <BannerLogin />
      <LoginForm />
    </div>
  );
};

export default Login;
