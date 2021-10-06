import logo from "../../assets/images/logo.svg";
import icon_phone from "../../assets/images/icon_phone.svg";
export const Header = () => {
  return (
    <div className="containerHeader">
      <img src={logo} alt="RIMAC" />
      <div className="containerContact">
        <p className="message">¿Tienes alguna duda?</p>
        <a href="/" className="phone">
          <img src={icon_phone} alt="icon_phone" />
          <span className="numberDesktop"> (01) 411 6001</span>
          <p className="numberMobile">Llámanos</p>
        </a>
      </div>
    </div>
  );
};

export default Header;