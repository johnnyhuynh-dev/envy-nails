import React from "react";
import ServicePage from "./ServicePage";
import useFetchDocument from "./useFetchDocuments";
import eyelashSeparator from "./assets/eyelash-separator.jpg";

export default function Lifting() {
  const { docs: images, loading } = useFetchDocument("envy-eyelash");

  return (
    <div className="lifting">
      <ServicePage
        images={images}
        loading={loading}
        serviceName={"LIFTING / TINTING"}
        separatorImage={eyelashSeparator}
      />
    </div>
  );
}
