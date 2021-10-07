import React from "react";
import BannerLogin from "../elements/BannerLogin";
import LoginForm from "../elements/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="container_login">
      <BannerLogin />
      <LoginForm />
    </div>
  );
};

export default Login;
