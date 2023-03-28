import { createSlice } from "@reduxjs/toolkit";
import profile from './profiles.json';
// console.log(profiles);
const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile (state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.website = action.payload.website;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;