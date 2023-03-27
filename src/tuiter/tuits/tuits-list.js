import TuitItem from "./tuit-item";
import React from "react";
import { useSelector } from "react-redux";

const TuitsList = () => {
    const postArray = useSelector(state => state.tuits)
    return (
        // <h1>Tuits List</h1>
        <ul className="list-group">
            {postArray.map(
                (post, index) => <TuitItem post={post} />
            )
            }
        </ul>
    );
};

export default TuitsList;