import { useState } from "react";

export const useFetchData = (apiFn) => {
  const [state, setState] = useState({
    isLoading: false,
    isError: false,
    data: null,
  });

  const getData = async (...params) => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));
      const response = await apiFn(...params);
      const data = response.data.data;
      setState((prevState) => ({ ...prevState, isLoading: false, data }));
    } catch (e) {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isError: true,
        data: e,
      }));
    }
  };
  return [state, getData];
};
