import React from "react";
import "./DetailAddress.scss";
import IconLocation from "../../Assets/iconLocation.svg";
import DetailCalification from "../DetailCalification/DetailCalification";

const DetailAddress = () => {
  return (
    <div className="container-address">
      <div className="address">
        <div className="info-address">
          <span>
            <img src={IconLocation} alt="location" width="30px" />
            Bogotá, Suba salitre, Colombia <br />
            Calle 154# 91-56
          </span>
          <DetailCalification></DetailCalification>
        </div>
      </div>
    </div>
  );
};

export default DetailAddress;
