import React from "react";
import { Link } from "react-router-dom";
import IconArrowBack from "../../Assets/iconArrowBack.svg";
import "./DetailHeader.scss";

const DetailHeader = () => {
  return (
    <div className="container-header">
      <div className="deparments">
        <div className="tittle-deparments">
          <span>Departamento</span>
          <div>
            <h3>Hermitage</h3>
          </div>
        </div>

        <div className="arrow">
          <Link to={"Home"}>
            <img src={IconArrowBack} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
