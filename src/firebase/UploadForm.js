import React, { useState } from "react";
import Output from "./Output";

const UploadForm = () => {
  const [files, setFiles] = useState(null);
  const [folder, setFolder] = useState("");

  function handleSelectPhoto(e) {
    let selected = e.target.files;
    if (selected) {
      setFiles(selected);
    }
  }

  function handleInput(e) {
    setFolder(e.target.value);
  }

  return (
    <form className="upload-form">
      <div>Select images here to upload to Firebase Storage</div>

      <label htmlFor="file-upload">Photos for each folder</label>
      <input
        id="file-upload"
        multiple="multiple"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleSelectPhoto}
      />
      <label htmlFor="folder">Folder on FireStore</label>
      <input id="folder" type="text" value={folder} onChange={handleInput} />
      {files && folder && (
        <Output
          files={files}
          folder={folder}
          setFiles={setFiles}
          setFolder={setFolder}
        />
      )}
    </form>
  );
};

export default UploadForm;
