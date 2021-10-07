import axios from "axios";

export const getAllUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response;
};
