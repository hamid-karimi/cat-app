import client from "@/gate/config";
export const useRequest = () => {
  const request = {
    //fix the params type
    get: (path: string, params = {}) => {
      return client
        .get(path, {
          params: params,
        })
        .then((res) => res.data)
        .catch((err) => err);
    },
  };

  return request;
};
