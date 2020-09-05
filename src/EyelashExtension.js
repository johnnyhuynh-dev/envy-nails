import React from "react";
import ServicePage from "./ServicePage";
import useFetchDocument from "./useFetchDocuments";

export default function EyelashExtension() {
  const { docs: images, loading } = useFetchDocument("eyelash");
  return (
    <div className="eyelash-extension">
      <ServicePage
        images={images}
        loading={loading}
        serviceName={"EYELASH EXTENSION"}
      />
    </div>
  );
}
