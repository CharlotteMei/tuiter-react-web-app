import React from "react";
// import postArray from "./post-items.json"
import { useSelector } from "react-redux";
// import PostItem from "./PostItem.js";
import TuitsList from "../tuits/tuits-list.js";

const HomeComponent = () => {
    const postArray = useSelector(state => state.tuits);
    return (
        // <ul class="list-group">
        //     {
        //         postArray.map(p =>
        //             <PostItem
        //                 post={p} />
        //         )
        //     }
        // </ul>
        <TuitsList/>
    );
}
export default HomeComponent;