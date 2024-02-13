import { FetcherMethod } from "../@types/FetcherType";
import axios from "../../node_modules/axios/index";

export const Fetcher = async (
  endpoint: string,
  callback: (data: any, error: any) => any,
  headers?: any,
  method?: FetcherMethod
) => {
  try {
    const fetch = await axios({
      method: method ? method : "get",
      headers,
      url: endpoint,
    });

    return callback(fetch, null);
  } catch (error) {
    return callback(null, error);
  }
};
