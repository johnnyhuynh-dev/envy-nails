import React, { useState, useEffect } from "react";
import ServicePage from "./ServicePage";
import useFetchDocument from "./useFetchDocuments";
import Modal from "./Modal";
import ImageViewer from "./ImageViewer";

export default function Waxing() {
  const { docs: images, loading } = useFetchDocument("eyelash");

  return (
    <div className="nails">
      <ServicePage images={images} loading={loading} serviceName={"NAILS"} />
    </div>
  );
}
