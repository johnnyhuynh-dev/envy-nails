import { useState, useEffect } from "react";
import { projectFirestore } from "./firebase/config";

export default function useFetchDocuments(collection) {
  const [docs, setDocs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    projectFirestore
      .collection(collection)
      .orderBy("createdAt")
      .get()
      .then((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Error getting documents", err);
      });
  }, [collection]);
  return { docs, loading };
}
