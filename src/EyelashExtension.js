import React from "react";
import ServicePage from "./ServicePage";
import useFetchDocument from "./useFetchDocuments";
import eyelashSeparator from "./assets/eyelash-separator.jpg";

export default function EyelashExtension() {
  const { docs: images, loading } = useFetchDocument("envy-eyelash");

  return (
    <div className="eyelash-extension">
      <ServicePage
        images={images}
        loading={loading}
        serviceName={"EYELASH EXTENSION"}
        separatorImage={eyelashSeparator}
      />
    </div>
  );
}
