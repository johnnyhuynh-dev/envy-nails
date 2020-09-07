import React from "react";
import ServicePage from "./ServicePage";
import useFetchDocument from "./useFetchDocuments";

export default function Waxing() {
  const { docs: images, loading } = useFetchDocument("eyelash");

  return (
    <div className="nails">
      <ServicePage images={images} loading={loading} serviceName={"NAILS"} />
    </div>
  );
}
