import { atom, selector, selectorFamily } from "recoil";
import { axiosClient } from "../utils/axiosClient";
import { userDataState } from "./user";

const FeedState = atom({
   key: "feed",
   default: [],
});
