const NavigationSidebar = (pageType) => {
    var homePageStatus = "";
    var explorePageStatus = "";
    if (pageType === "home") {
        //  block of code to be executed if the condition is true
        homePageStatus = "active"
      }else if (pageType === "explore") {
        explorePageStatus = "active"
      } else {
        //  block of code to be executed if the condition is false
        
      }
    
    return (`
    <div class="list-group">
    <a href="" class="list-group-item override-bs list-group-item-action">
        <i class="fab fa-twitter" style="color: #1DA1F2"></i>
    </a>
    
    <a href="../HomeScreen/index.html" class="list-group-item override-bs list-group-item-action ${homePageStatus}">
        <i class="fa fa-home"></i>
        <span class="ms-3">Home</span>

        </a>
    <a href="../ExploreScreen/index.html" class="list-group-item override-bs list-group-item-action ${explorePageStatus}">
        <i class="fa fa-hashtag"></i>
        <span class="ms-3">Explore</span>
        </a>
    <a href="" class="list-group-item override-bs list-group-item-action">
        <i class="fa fa-bell"></i>
        <span class="ms-3">Notifications</span></a>
    <a href="" class="list-group-item override-bs list-group-item-action">
        <i class="fa fa-comment-dots"></i>
        <span class="ms-3">Messages</span></a>
    <a href="" class="list-group-item override-bs list-group-item-action">
        <i class="fa fa-bookmark"></i>
        <span class="ms-3">Bookmarks</span></a>
    <a href="" class="list-group-item override-bs list-group-item-action">
        <i class="fa fa-list"></i>
        <span class="ms-3">Lists</span></a>
    <a href="" class="list-group-item override-bs list-group-item-action">
        <i class="fa fa-user"></i>
        <span class="ms-3">Profile</span></a>
    <a href="" class="list-group-item override-bs list-group-item-action">
        <i class="fa fa-infinity"></i>
        <span class="ms-3">More</span></a>
</div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;

// eslint-disable-next-line no-undef
$(NavigationSidebar);

