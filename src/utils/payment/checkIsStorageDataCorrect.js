import { storageNames } from "constants/storage/storageNames";

export const checkIsStorageDataCorrect = () => {
  const json = localStorage.getItem(storageNames.userData);
  if (!json) return false;
  let storageData = JSON.parse(json);
  if (
    !storageData.hasOwnProperty("name") ||
    !storageData.hasOwnProperty("phone") ||
    !storageData.hasOwnProperty("email")
  )
    return false;
  return true;
};
