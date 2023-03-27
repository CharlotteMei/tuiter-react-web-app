import { createSlice } from "@reduxjs/toolkit";
import profile from './profiles.json';
// console.log(profiles);
const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
});

export default profileSlice.reducer;