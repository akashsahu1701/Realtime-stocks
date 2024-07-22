import { apiHandler, baseUrl } from ".";

export const fetchStocks = async (stock: string, limit: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await apiHandler.get(
        `${baseUrl}/stocks?symbol=${stock}&limit=${limit}`
      );
      resolve(response?.data?.data);
    } catch (error) {
      console.log("Error fetching stocks", error);
      reject("something went wrong");
    }
  });
};
