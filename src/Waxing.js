import React from "react";
import ServicePage from "./ServicePage";
import useFetchDocument from "./useFetchDocuments";
import waxingSeparator from "./assets/waxing-separator.jpg";

export default function Waxing() {
  const { docs: images, loading } = useFetchDocument("envy-waxing");

  return (
    <div className="waxing">
      <ServicePage
        images={images}
        loading={loading}
        serviceName={"WAXING"}
        separatorImage={waxingSeparator}
      />
    </div>
  );
}
