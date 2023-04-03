
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
    return (
        <div>
            <div class="row">
                <div class="col-2">
                    <i class="fa-regular fa-comment"></i>
                    {tuit.replies}
                </div>
                <div class="col-2">
                    <i class="fa-regular fa-handshake"></i>
                    {tuit.retuits}
                </div>
                <div class="col-2">
                    <i
                        className="bi bi-heart-fill me-2 text-danger"
                        onClick={
                            () => {
                                dispatch(updateTuitThunk({
                                    ...tuit,
                                    likes: tuit.likes + 1
                                }))

                            }} ></i>
                    {tuit.likes}

                </div>
                <div class="col-2">
                    <i class="fa-solid fa-thumbs-down"
                        onClick={
                            () => {
                                dispatch(updateTuitThunk({
                                    ...tuit,
                                    dislikes: tuit.dislikes + 1
                                }))

                            }} ></i>
                    {tuit.dislikes}

                </div>
                <div class="col-auto">
                    <i class="fa-regular fa-share-from-square"></i>
                </div>

            </div>
        </div >
    )
}
export default TuitStats