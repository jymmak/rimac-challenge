import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="container-footer">
      <p>© {new Date().getFullYear()} RIMAC Seguros y Reaseguros.</p>
    </div>
  );
};

export default Footer;
