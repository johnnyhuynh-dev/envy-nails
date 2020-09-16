import React from "react";
import ServicePage from "./ServicePage";
import useFetchDocument from "./useFetchDocuments";
import liftingSeparator from "./assets/lifting-separator.jpg";
import "./Lifting.css";

export default function Lifting() {
  const { docs: images, loading } = useFetchDocument("envy-lifting");

  return (
    <div className="lifting">
      <ServicePage
        images={images}
        loading={loading}
        serviceName={"LIFTING / TINTING"}
        separatorImage={liftingSeparator}
      />
    </div>
  );
}
