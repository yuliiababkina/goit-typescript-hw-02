import axios from "axios";
import { Image } from "../components/App/App.types";

const UNSPLASH_ACCESS_KEY = "boroGLh2_ZkYMROzEGG_Tf0mAQYIo-OqGLpRL-i2lW0";
axios.defaults.baseURL = "https://api.unsplash.com/search";
axios.defaults.headers.common["Authorization"] =
  "Client-ID " + UNSPLASH_ACCESS_KEY;

type FetchResponse = {
  results: Image[];
  total: number;
};

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchResponse> => {
  const { data } = await axios.get(`/photos`, {
    params: {
      page,
      query,
      per_page: 12,
      orientation: "landscape",
    },
  });

  return data;
};
