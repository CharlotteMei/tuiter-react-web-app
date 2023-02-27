const WhoToFollowListItem = (who) => {
    return (`
                    <div class="list-group-item override-bs-follow">
                        <div class="row">
                            <div class="col-3">
                                <img class="account-profile-pic" src="${who.avatarIcon}">
                            </div>
                            <div class="col-5">
                                <h6 class="text-bold">${who.userName} <i class="fa fa-check-circle"></i></h6>
                                <p class="text-secondary">@${who.handle}</p>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-primary btn-round-corner-override">Follow</button>
                            </div>
                        </div>
                    </div>
    `);
};

export default WhoToFollowListItem;