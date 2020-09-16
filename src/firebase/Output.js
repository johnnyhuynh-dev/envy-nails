import React from "react";
import useMultipleStorage from "./useStorage";
import "./Output.css";

export default function Output({
  files,
  folder,
  setFiles,
  setFolder,
  setIsSubmitted,
}) {
  const urls = useMultipleStorage(files, folder);
  if (urls) {
    setFiles(null);
    setFolder("");
    setIsSubmitted(false);
  }

  return <div>Submitted</div>;
}
