import React, { useState } from "react";
import Output from "./Output";

const UploadForm = () => {
  const [files, setFiles] = useState(null);
  const [folder, setFolder] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSelectPhoto(e) {
    let selected = e.target.files;
    if (selected) {
      setFiles(selected);
    }
  }

  function handleInput(e) {
    setFolder(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
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
      <button onClick={handleSubmit}>Submit</button>
      {files && folder && isSubmitted && (
        <Output
          files={files}
          folder={folder}
          setFiles={setFiles}
          setFolder={setFolder}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </form>
  );
};

export default UploadForm;
