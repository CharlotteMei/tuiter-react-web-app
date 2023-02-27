// {
//     "topic": "Web Development",
//     "userName": "ReactJS",
//     "time": "2h",
//     "image": "../../images/react-blue.png",
//     "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
//    },

const PostSummaryItem = (post) => {
    return (`
                        <div class="list-group-item override-bs">
                            <div class="row">
                                <div class="col-10">
                                    <div class="text-secondary">${post.topic}</div>
                                    <div class="text-bold main-title-no-wrap">
                                        ${post.userName} <i class="fa fa-check-circle"></i>&nbsp&nbsp
                                    </div>
                                    <div class="text-secondary"> - ${post.time} </div>
                                    <div class="text-bold">
                                        ${post.title}
                                    </div>
                                </div>

                                <div class="col-2">
                                    <img src="${post.image}" class="main-post-logo" style="border-radius: 10px; width: 100%;">
                                </div>
                            </div>
                        </div>
    `);
};

export default PostSummaryItem;