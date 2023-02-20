import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
            <ul class="list-group">
                ${posts.map(p => {return(PostItem(p));}).join('')}
            </ul>
 `);
}
export default PostList;