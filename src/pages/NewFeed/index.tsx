import React from "react";
import FeedCard from "../../components/FeedCard";
import PageContainer from "../../components/PageContainer";

const NewFeed = () => {
    return (
        <PageContainer page="Post">
            <FeedCard />
        </PageContainer>
    );
};

export default NewFeed;
