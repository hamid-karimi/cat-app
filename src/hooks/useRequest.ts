import client from "@/gate/Config";
export const useRequest = () => {
  const request = {
    //fix the params type
    get: (path: string, params = {}) => {
      return client
        .get(path, {
          params: params,
        })
        .then((res) => res)
        .catch((err) => err);
    },
  };

  return request;
};
