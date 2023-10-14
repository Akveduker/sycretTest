import { certificateCtxReducerActions } from "utils/reducers/reducerActionsNames/certificateContext/certificateCtxReducerActions";

export const useCreateCertificateActions = (dispatch) => {
  const setDesign = (designObj) => {
    return dispatch({
      type: certificateCtxReducerActions.setDesign,
      payload: designObj,
    });
  };
  const setFetchedData = (state) => {
    return dispatch({
      type: certificateCtxReducerActions.setFetchedData,
      payload: state,
    });
  };
  const setCertificate = (certificate) => {
    return dispatch({
      type: certificateCtxReducerActions.setCertificate,
      payload: certificate,
    });
  };
  return {
    setDesign,
    setFetchedData,
    setCertificate,
  };
};
