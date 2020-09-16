import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "./config";

const useStorage = (file, folder) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(`${folder}/${file.name}`);
    const collectionRef = projectFirestore.collection(folder);

    //listen for state changes, errors and completion of the upload
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentage);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const fileName = file.name;
        collectionRef.add({ url, createdAt, fileName });
        setUrl(url);
      }
    );
  }, [file]);

  return url;
};

/*eslint-disable*/
const useMultipleStorage = (files, folder) => {
  let urls = [];
  Object.entries(files).forEach(([key, file]) => {
    if (key !== "length") {
      urls.push(useStorage(file, folder));
    }
  });
  return urls;
};

export default useMultipleStorage;
