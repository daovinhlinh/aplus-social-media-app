import { atom, selector } from "recoil";

const USER_DATA = "userData";

interface UserData {
   _id: string;
   username: string;
   email: string;
   password: string;
   avatar: string;
   background: string;
   followers: any[];
   followings: any[];
   friends: any[];
   createdAt: Date;
   updatedAt: Date;
   __v: number;
}

const userDataState = atom({
   key: USER_DATA,
   default: null as UserData,
});

export { userDataState };
