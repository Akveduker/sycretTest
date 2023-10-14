import apiInstance from "./config";

class Api {
  static getCertificates = (options) => {
    return apiInstance.get("", {
      ...options,
      params: {
        ...options.params,
        MethodName: "OSGetGoodList",
        ismob: 0,
      },
    });
  };
  static buyCertificate = (certificate, options) => {
    return apiInstance.get(``, {
      ...options,
      params: {
        ...options.params,
        MethodName: "OSSale",
        ...certificate,
      },
    });
  };
}
export const { getCertificates, buyCertificate } = Api;
