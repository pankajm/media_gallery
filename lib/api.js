import axios from "axios";
import { GET_MEDIA_API_URL } from "../constants";

export const getMedia = async () => {
  const { data: response } = await axios.get(GET_MEDIA_API_URL, {
    headers: {
      authorization: "basic abc@gmail.com:1234",
    },
  });
  return response;
};
