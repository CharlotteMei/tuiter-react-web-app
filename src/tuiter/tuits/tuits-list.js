import TuitItem, { useState } from "./tuit-item";
import React from "react";
import { useSelector } from "react-redux";

const TuitsList = () => {
    const postArray = useSelector(state => state.tuits)
    console.log(postArray)
    return (
        // <h1>Tuits List</h1>
        postArray.map(
            (post, index) => <TuitItem post={post}/>
        )
    );
};

export default TuitsList;