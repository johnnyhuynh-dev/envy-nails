import React from "react";
import ServicePage from "./ServicePage";
import useFetchDocument from "./useFetchDocuments";
import "./Nails.css";
import nailsSeparator from "./assets/nails-separator.jpg";

export default function Waxing() {
  const { docs: images, loading } = useFetchDocument("envy-nails");

  return (
    <div className="nails">
      <ServicePage
        images={images}
        loading={loading}
        serviceName={"NAILS"}
        separatorImage={nailsSeparator}
      />
    </div>
  );
}
