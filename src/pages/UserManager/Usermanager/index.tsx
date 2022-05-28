import React from "react";
import Friends from "../../../assets/Icons/Friends";
import IconProfile from "../../../assets/Icons/IconProfile";
import Post from "../../../assets/Icons/Post";
import ManagerContainer from "../../../components/ManagerContainer";
import PageContainer from "../../../components/PageContainer";

const Usermanager = () => {
   const featureList = [
      {
         title: "Profile",
         icon: <IconProfile />,
         link: "/profile",
      },
      {
         title: "Post",
         icon: <Post />,
         link: "/post",
      },
   ];

   return (
      <PageContainer isAdmin={true} featureList={featureList}>
         <ManagerContainer />
      </PageContainer>
   );
};

export default Usermanager;
