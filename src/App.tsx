import React, { useContext } from "react";
import {
   Navigate,
   Outlet,
   Route,
   RouteProps,
   Routes,
   useLocation,
} from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { AuthContext } from "./context/authContext";
import FriendList from "./pages/FriendList";
import Members from "./pages/Group/Members";
import PhotoListG from "./pages/Group/Photos";
import PostGroup from "./pages/Group/Post";
import ProfileGroup from "./pages/Group/Profile";
import ProfileGroupM from "./pages/Group/ProfileM";
import Login from "./pages/Login";
import NewFeed from "./pages/NewFeed";
import NotFound from "./pages/NotFound";
import PhotoList from "./pages/PhotoList";
import PostList from "./pages/PostList";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Usermanager from "./pages/UserManager/Usermanager";
import { userDataState } from "./store/user";

const PrivateRoute = (props: RouteProps) => {
   const userData = useRecoilValue(userDataState);
   const location = useLocation();

   if (!userData) {
      return <Navigate to="/login" state={{ from: location }} />;
   }

   return <Outlet {...props} />;
};

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
               <Route path="/" element={<NewFeed />} />
               <Route path="/friend" element={<FriendList />} />
               <Route path="/photo" element={<PhotoList />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/post" element={<PostList />} />
               <Route path="/UserMng" element={<Usermanager />} />
               <Route path="/postG" element={<PostGroup />} />
               <Route path="/group" element={<ProfileGroup />} />
               <Route path="/groupM" element={<ProfileGroupM />} />
               <Route path="/photoG" element={<PhotoListG />} />
               <Route path="/MemG" element={<Members />} />
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
