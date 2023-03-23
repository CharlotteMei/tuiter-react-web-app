
const TuitStats = ({ post }) => {
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
                    {likeSimbol}
                    {post.likes}
                </div>
                <div class="col-3">
                    <i class="fa-regular fa-share-from-square"></i>
                </div>

            </div>
        </div>
    )
}
export default TuitStats