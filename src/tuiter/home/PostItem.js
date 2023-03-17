const PostItem = (
    { post = {
        profilePic: "http://pm1.narvii.com/6789/8069309009bdc1a66868194286418e3d4d5d6c06v2_00.jpg",
        name: "(G)I-DLE",
        userName: "gidle",
        tuit: "Hi KPop Fans!",
        time: "23h",
        title: "(G)I-DLE just released the new album",
        image: "https://thebiaslistcom.files.wordpress.com/2022/10/gi-dle-nxde.jpg?w=640",
        summary: "The kpop group (G)I-DLE is bringing the new album Nxde. It is awesome!",
        comment: "100M+",
        retuit: "100M+",
        liked: "500M+"
    } }) => {
    return (
        // <h1>Home Component</h1>
        <div class="row border-bottom border-light mb-2">
            <div class="col-1">
                <img class="rounded-circle" width="150%" src={`${post.profilePic}`} />
            </div>
            <div class="col-11">
                <div class="fw-bold text-white">{`${post.name}`} <i class="fa-solid fa-circle-check"></i> <span class="text-secondary fw-normal">{`${post.userName}`} · {`${post.time}`}</span></div>
                <div class="text-white mb-2">{`${post.tuit}`}</div>
                <div class="container border border-light px-0 rounded-4">
                    <div>
                        <img class="rounded-top" width="100%" src={`${post.image}`} />
                    </div>
                    <div class="text-white m-2">${post.title}</div>
                    <div class="text-secondary mb-2 ms-2 me-2">{`${post.summary}`}</div>

                </div>
                <div class="row mt-3 mb-3">
                    <div class="col-3">
                        <div><i class="fa-regular fa-comment"></i>   {`${post.comment}`}</div>
                    </div>
                    <div class="col-3">
                        <div><i class="fa-solid fa-arrows-rotate"></i> {`${post.retuit}`}</div>
                    </div>
                    <div class="col-3">
                        <div><i class="fa-regular fa-heart"></i>   {`${post.liked}`}</div>
                    </div>
                    <div class="col-3">
                        <div><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default PostItem;