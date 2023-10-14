import { storageNames } from "constants/storage/storageNames";

export const getCertificateInitalState = (initalState) => {
  const json = localStorage.getItem(storageNames.certificateState);
  if (!json) return initalState;
  const result = {
    ...initalState,
    ...JSON.parse(json),
  };
  return result;
};
