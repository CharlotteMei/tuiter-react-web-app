import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            ${who.map(
                user => {return (WhoToFollowListItem(user));}).join('')
            }
            </ul>
 `); }
 export default WhoToFollowList;