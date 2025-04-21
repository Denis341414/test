import { ApiClient, EndpointsEnum } from "@shared/api";

export const editTask = async (endpoint: string, data: any, id: string) => {
  try {
    await ApiClient<ResponseType>({
      url: `${endpoint}${id}`,
      method: "PUT",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};
