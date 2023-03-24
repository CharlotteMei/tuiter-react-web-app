import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = ({ post }) => {
    return (
        <li className="list-group-item">
            <div class="row">
                <div class="col-1">
                    <img class="rounded-circle" width="150%" src={`${post.image}`} />
                </div>
                <div class="col-11">
                    <div class="fw-bold">{`${post.userName}`} <i class="fa-solid fa-circle-check"></i> <span class="text-secondary fw-normal">{`${post.handle}`} · {`${post.time}`}</span></div>
                    <div class=" mb-2">{post.tuit}</div>
                </div>
            </div>
            <div class="row">
                <TuitStats post={post}/>
            </div>
        </li>
    )
};

export default TuitItem;