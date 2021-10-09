import React from "react";
import peopleThanks from "../../assets/images/people_thanks.svg";

const BannerThanks: React.FC = () => {
  return (
    <div className="content-banner_thanks">
      <div className="banner_thanks_desktop">
        <div className="img_banner_thanks">
          <img src={peopleThanks} alt="peopleThanks" />{" "}
        </div>
      </div>
    </div>
  );
};

export default BannerThanks;
