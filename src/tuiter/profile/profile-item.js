import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileItem = () => {
    const profile = useSelector((state) => state.profile)
    return (
        <div>
            <div class="row" style={{ "margin": "10px" }}>
                <div class="col-2">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div class="col-auto">
                    <div><b> {profile.firstName} {profile.lastName}</b></div>
                    <div class="text-secondary">6710 Tweets</div>
                </div>
            </div>
            <div>
                <img src={profile.bannerPicture} width="100%" alt="profile-banner"></img>
            </div>
            <div style={{ "padding": "15px" }}>
                <button className="rounded-pill btn btn-secondary float-end">
                    <Link to="/tuiter/edit-profile">
                        Edit Profile
                    </Link>
                </button>
            </div>
            <div class="row">
                <div class="col-2">
                    <img width="150%" class="rounded-circle" src={`${profile.profilePicture}`} alt="profile-pic" />
                </div>
                <div class="col-9" style={{ "margin": "10pt" }}>
                    <div><b>{profile.firstName} {profile.lastName}</b></div>
                    <div className="text-secondary">{profile.handle}</div>
                </div>
            </div>
            <div>
                {profile.bio}
            </div>
            <div class="row text-secondary">
                <div class="col-3">
                    <i class="fa-solid fa-location-dot" style={{ "padding": "10px" }}></i>
                    {profile.location}
                </div>
                <div class="col-3">
                    <i class="fa-solid fa-cake-candles" style={{ "padding": "10px" }}></i>
                    {profile.dateOfBirth}
                </div>
                <div class="col-3">
                    <i class="fa-solid fa-calendar-days" style={{ "padding": "10px" }}></i>
                    {profile.dateJoined}
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <b>{profile.followingCount}</b> Following
                </div>
                <div class="col-4">
                    <b>{profile.followersCount}</b> Followers
                </div>
            </div>
        </div>
    )
}

export default ProfileItem;