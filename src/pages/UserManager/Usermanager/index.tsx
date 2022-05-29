import React from "react";
import Friends from "../../../assets/Icons/Friends";
import IconProfile from "../../../assets/Icons/IconProfile";
import Post from "../../../assets/Icons/Post";
import ManagerContainer from "../../../components/ManagerContainer";
import PageContainer from "../../../components/PageContainer";

const Usermanager = () => {
   const featureList = [
      {
         title: "User Management",
         icon: <IconProfile />,
         link: "/profile",
      },
      {
         title: "Post Management",
         icon: <Post />,
         link: "/post",
      },
      {
         title: "Reports",
         icon: <Friends />,
         link: "",
      },
   ];

   return (
      <PageContainer isAdmin={true} featureList={featureList}>
         <ManagerContainer />
      </PageContainer>
   );
};

export default Usermanager;
