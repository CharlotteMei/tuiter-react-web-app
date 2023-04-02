
import React, { useState } from "react";
// import { likedToggle } from "./tuits-reducer";
import { updateTuitThunk } from "../../services/tuits-thunks"
import { useDispatch } from "react-redux";

const TuitStats = ({ post }) => {
    const dispatch = useDispatch();
    // const toggleLiked = (post) => {
    //     console.log("toggleLiked function")
    //     dispatch(likedToggle(post))
    // }

    // let likeSimbol = post.liked ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
    let tuit = post
    const [likeCount, setLikeCount] = useState(tuit.likes);
    return (
        <div>
            <div class="row">
                <div class="col-3">
                    <i class="fa-regular fa-comment"></i>
                    {tuit.replies}
                </div>
                <div class="col-3">
                    <i class="fa-regular fa-handshake"></i>
                    {tuit.retuits}
                </div>
                <div class="col-3">
                    <i
                        className="bi bi-heart-fill me-2 text-danger"
                        onClick={
                            () => {
                                dispatch(updateTuitThunk({
                                ...tuit,
                                likes: likeCount+1
                            }))
                                setLikeCount(likeCount+1)
                            }} ></i>
                    {likeCount}

                </div>
                <div class="col-3">
                    <i class="fa-regular fa-share-from-square"></i>
                </div>

            </div>
        </div >
    )
}
export default TuitStats