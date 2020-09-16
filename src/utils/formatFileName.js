export default function formatFileName(fileName) {
  const regex = /[\D\s]*(?=\d?\.jpg)/i;
  return fileName.match(regex)[0].trim();
}
