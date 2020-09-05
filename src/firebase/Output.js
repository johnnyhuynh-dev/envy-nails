import React from "react";
import useMultipleStorage from "./useStorage";
import "./Output.css";

export default function Output({ files, folder, setFiles, setFolder }) {
  const urls = useMultipleStorage(files, folder);
  if (urls) {
    setFiles(null);
    setFolder("");
  }

  return <div>Submitted</div>;
}
