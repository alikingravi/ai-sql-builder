import axiosInstance from "@/utils/axiosInstance";

interface GenerateSqlResponse {
  sql_query: string;
}

export const generateSqlQuery = async (
  naturalQuery: string
): Promise<GenerateSqlResponse> => {
  try {
    const response = await axiosInstance.post<GenerateSqlResponse>(
      "/generate-sql",
      { natural_query: naturalQuery }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
