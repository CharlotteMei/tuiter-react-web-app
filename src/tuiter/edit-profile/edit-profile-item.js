import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import { updateProfile } from "../profile/profile-reducer"

const EditProfileItem = () => {
    const profile = useSelector((state) => (state.profile))
    const [form, setForm] = useState({ ...profile, name: profile.firstName + ' ' + profile.lastName });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveUpdatedProfile = () => {
        dispatch(updateProfile({
            firstName: form.name.split(' ')[0] || '',
            lastName: form.name.split(' ')[1] || '',
            bio: form.bio,
            website: form.website,
            location: form.location,
            dateOfBirth: form.dateOfBirth,
        }));
        navigate('/tuiter/profile');
    }

    return (
        <div class="row" style={{ "margin": "10px" }}>
            <div class="col-2">
                <button style={{ "background": "none", "border": "none" }} onClick={() => navigate('/tuiter/profile')}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="col-8">
                <div><b> Edit profile</b></div>
            </div>
            <div class="col-2">
                <div>
                    <button type={'submit'} className={'btn btn-dark button-round'} onClick={() => saveUpdatedProfile()}>Save</button>
                </div>
            </div>
            <div>
                <img src={profile.bannerPicture} width="100%" style={{ "margin": "15px" }} alt="profile-banner"></img>
            </div>

            <form >
                <div className='form-group'>
                    <label className='text-secondary'>Name</label>
                    <input class="form-control" onChange={e => setForm({ ...form, name: e.target.value })} required value={form.name} />
                </div>
                <div className='form-group'>
                    <label className='text-secondary'>Bio</label>
                    <textarea class="form-control" onChange={e => setForm({ ...form, bio: e.target.value })} required value={form.bio}></textarea>
                </div>
                <div className='wd-forms'>
                    <label className='text-secondary'>Location</label>
                    <input class="form-control" onChange={e => setForm({ ...form, location: e.target.value })} required value={form.location} />
                </div>
                <div className='wd-forms'>
                    <label className='text-secondary'>Website</label>
                    <input class="form-control" onChange={e => setForm({ ...form, website: e.target.value })} required value={form.website} />
                </div>
                <div className='wd-forms'>
                    <label className='text-secondary'>Date of Birth</label>
                    <input class="form-control" onChange={e => setForm({ ...form, dateOfBirth: e.target.value })} required value={form.dateOfBirth} />
                </div>
            </form>
        </div>
    )
};

export default EditProfileItem;