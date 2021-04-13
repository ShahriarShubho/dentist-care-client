import React from "react";
import CardInfo from "../CardInfo/CardInfo";
import {
  faMapMarkedAlt,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
  const cardData = [
    {
      title: "Opening Hour",
      description: "This open in 10am to 4pm",
      icon: faClock,
      background : "primary"
    },
    {
      title: "Visit Our Location",
      description: "Kuti, Kasba, Brahmanbaria",
      icon: faMapMarkedAlt,
      background : "dark"
    },
    {
      title: "Contract us",
      description: "+8801817510325",
      icon: faPhone,
      background : "primary"
    },
  ];
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {cardData.map((info) => (
          <CardInfo info={info}></CardInfo>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
