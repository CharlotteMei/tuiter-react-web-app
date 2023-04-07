import TuitItem from "./tuit-item";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { findTuitsThunk }
    from "../../services/tuits-thunks";

const TuitsList = () => {
    // const postArray = useSelector(state => state.tuits)
    const { tuits, loading } = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("hello at dispatch findThunk");
        dispatch(findTuitsThunk())
    }, [])


    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {tuits.map(
                (tuit, index) => <TuitItem post={tuit} />
            )
            }
        </ul>
    );
};

export default TuitsList;