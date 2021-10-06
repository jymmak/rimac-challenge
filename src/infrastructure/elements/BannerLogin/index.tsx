import personDesktop from "../../assets/images/people_banner.svg";
import personMobile from "../../assets/images/person_mobile.png";

const BannerLogin: React.FC = () => {
  return (
    <div className="login_banner">
      <div className="banner_desktop">
        <div className="img_banner">
          <img src={personDesktop} alt="banner person desktop" />
        </div>
        <div className="container_message">
          <h3>¡NUEVO!</h3>
          <h1>
            Seguro <span>Vehicular</span> <br /> <span>Tracking</span>
          </h1>
          <p className="">Cuéntanos donde le harás seguimiento a tu seguro</p>
        </div>
      </div>
      <div className="banner_mobile">
        <div className="container_message_mobile">
          <h3>¡NUEVO!</h3>
          <h1>
            Seguro Vehicular <br /> <span>Tracking</span>
          </h1>
          <p className="">Cuéntanos donde le harás seguimiento a tu seguro</p>
        </div>

        <img src={personMobile} alt="banner person mobile" />
      </div>
    </div>
  );
};

export default BannerLogin;
