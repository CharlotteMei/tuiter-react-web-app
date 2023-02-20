import PostSummaryList
   from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       <div class="form col-10">

                        <div class="input-group override-bs mb-3">
                            <span class="input-group-text override-bs-search" id="inputGroup-sizing-default">
                                <i class="fa fa-search" style="color: black"></i>
                            </span>
                            <input type="text" class="form-control override-bs-search" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" placeholder="Search twitter">
                        </div>
                    </div>

           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                            <a class="nav-link active override-bs" href="#"> For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link override-bs" href="#">Entertainment</a>
                        </li>
           </ul>
           <!-- image with overlaid text -->
           <img class="main-page-image pt-3" src="https://live.staticflickr.com/65535/50703878421_40f681155b_b.jpg">

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

