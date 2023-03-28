
import React from "react";
import { likedToggle } from "./tuits-reducer";
import { useDispatch } from "react-redux";

const TuitStats = ({ post }) => {
    const dispatch = useDispatch();
    const toggleLiked = (post) => {
        console.log("toggleLiked function") 
        dispatch(likedToggle(post))
    }

    let likeSimbol = post.liked ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <i class="fa-regular fa-comment"></i>
                    {post.replies}
                </div>
                <div class="col-3">
                    <i class="fa-regular fa-handshake"></i>
                    {post.retuits}
                </div>
                <div class="col-3">
                    <button type="button" style={{border:"none", background:"none"}}
                        onClick={() =>
                            toggleLiked(post)}
                    >
                        {likeSimbol}
                        {post.likes}
                    </button>
                </div>
                <div class="col-3">
                    <i class="fa-regular fa-share-from-square"></i>
                </div>

            </div>
        </div>
    )
}
export default TuitStats