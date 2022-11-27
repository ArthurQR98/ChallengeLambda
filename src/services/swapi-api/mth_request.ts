import { http_request } from "./axios";

export const get = async (path: string) => {
  try {
    const data = await http_request.get(`/${path}`);
    return data;
  } catch (error) {
    return new Error(error.message);
  }
};

export const getById = async (path: string, id: number) => {
  try {
    const data = await http_request.get(`/${path}/${id}`);
    return data;
  } catch (error) {
    return new Error(error.message);
  }
};

export const post = async (path: string, body: unknown) => {
  try {
    const data = await http_request.post(path, body);
    return data;
  } catch (error) {
    return new Error(error.message);
  }
};
