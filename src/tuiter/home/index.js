import postArray from "./post-items.json"
import PostItem from "./PostItem.js";

const HomeComponent = () => {
    return (
        <ul class="list-group">
            {
                postArray.map(p =>
                    <PostItem
                        post={p} />
                )
            }
        </ul>
        // <h1>Home Comp</h1>
    );
}
export default HomeComponent;