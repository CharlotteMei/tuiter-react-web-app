import React from "react";
const TuitItem = ({post}) => {
    return (
        <div>
            <div class="col-1">
                <img class="rounded-circle" width="150%" src={`${post.image}`} />
            </div>
            <div class="col-11">
                <div class="fw-bold text-white">{`${post.name}`} <i class="fa-solid fa-circle-check"></i> <span class="text-secondary fw-normal">{`${post.userName}`} · {`${post.time}`}</span></div>
                <div class="text-white mb-2">{`${post.tuit}`}</div>
                <div class="container border border-light px-0 rounded-4">
                    {/* <div>
                        <img class="rounded-top" width="100%" src={`${post.image}`} />
                    </div> */}
                    <div class="text-white m-2">{post.title}</div>
                    {/* <div class="text-secondary mb-2 ms-2 me-2">{`${post.summary}`}</div> */}

                </div>
            </div>
        </div>
    )
};

export default TuitItem;