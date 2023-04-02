import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
// import { deleteTuit } from "./tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = ({ post }) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    

    return (
        <li className="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img width="150%" class="rounded-circle" src={`${post.image}`} alt="profile-pic"/>
                </div>
                <div class="col-11">
                    <i className="bi bi-x-lg float-end"
                        onClick={() => deleteTuitHandler(post._id)}></i>
                    <div class="fw-bold">{`${post.username}`} <i class="fa-solid fa-circle-check"></i> <span class="text-secondary fw-normal">{`${post.handle}`} · {`${post.time}`}</span></div>
                    <div class=" mb-2">{post.tuit}</div>
                </div>
            </div>
            <div class="row">
                <TuitStats post={post} />
            </div>
        </li>
    )
};

export default TuitItem;