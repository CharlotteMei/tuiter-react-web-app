import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js"

const PostSummaryList = () => {
    return (`
                <div>
                    <div class="list-group">
                    ${exploreItems.map(
                        p => {return (PostSummaryItem(p));}
                    ).join('')}
                    </div>
                </div>
 `); }
 
 export default PostSummaryList;