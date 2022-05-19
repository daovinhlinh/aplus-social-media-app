import { Box, Container, Flex, HStack, Spacer,Text } from "@chakra-ui/react";
import React from "react";
import People from "../../../assets/Icons/People";
import Photo from "../../../assets/Icons/Photo";
import BackgroundGProfile from "../../../components/BackgoundprofileG";
import DetailCard from "../../../components/DetailCard";
import FeedCard from "../../../components/FeedCard";
import IconCard from "../../../components/IconCard";
import Navbar from "../../../components/NavBar";
import styles from "./styles.module.scss";
import Setting from "../../../assets/Icons/Setting";
import Logout from "../../../assets/Icons/Logout";
import MainProfileG from "../../../components/Mainprofile";
import PageContainerM from "../../../components/PagecontainerM";
import ManagerContainer from "../../../components/Manager";

const Usermanager = () => {
  
    return (
        <PageContainerM>
            
            <ManagerContainer/>
            
        </PageContainerM>
    );
};

export default Usermanager;