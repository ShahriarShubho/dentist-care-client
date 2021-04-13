import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CardInfo.css";

const CardInfo = ({ info }) => {
  return (
    <div className="col-md-4 text-white">
      <div className={`d-flex justify-content-center p-3 info-${info.background}`}>
        <div>
          <FontAwesomeIcon className="info-icon" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
