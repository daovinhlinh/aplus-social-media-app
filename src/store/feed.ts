import { atom, selector, selectorFamily } from "recoil";
import { axiosClient } from "../utils/axiosClient";
import { userDataState } from "./user";

const FeedState = atom({
   key: "feed",
   default: [],
});

export const getFeed = selector({
   key: "getFeed",
   get: async ({ get }: any) => {
      const fetchPosts = await axiosClient.get(
         `post/timeline/629ce3b070ad0da4575387b8`
      );
      return fetchPosts.data;
   },
});
