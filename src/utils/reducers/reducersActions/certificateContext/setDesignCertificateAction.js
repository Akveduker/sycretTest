export const setDesignCertificateAction = (currentDesign, newDesighn) => {
  return {
    ...currentDesign,
    ...newDesighn,
  };
};
