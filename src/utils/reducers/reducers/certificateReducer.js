import { certificateCtxReducerActions } from "../reducerActionsNames/certificateContext/certificateCtxReducerActions";
import { setDesignCertificateAction } from "../reducersActions/certificateContext/setDesignCertificateAction";

export const certificateReducer = (state, action) => {
  switch (action.type) {
    case certificateCtxReducerActions.setDesign:
      return {
        ...state,
        certifcateDesign: setDesignCertificateAction(
          state.certifcateDesign,
          action.payload
        ),
      };
    case certificateCtxReducerActions.setFetchedData:
      return {
        ...state,
        certificateFetchState: action.payload,
      };
    case certificateCtxReducerActions.setCertificate:
      return {
        ...state,
        certifcateDesign: {
          ...state["certifcateDesign"],
          price: action.payload["PRICE"],
        },
        currentCertificate: action.payload,
      };
    default:
      break;
  }
};
