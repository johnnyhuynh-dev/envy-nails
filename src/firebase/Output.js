import React, { useEffect } from "react";
import useStorage from "./useStorage";
import useMultipleStorage from "./useStorage";

export default function Output({ files, folder, setFiles, setFolder }) {
  const urls = useMultipleStorage(files, folder);
  if (urls) {
    setFiles(null);
    setFolder("");
  }

  return <div>Submitted</div>;
}
