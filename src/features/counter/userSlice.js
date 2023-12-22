import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    dataUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { dataUser } = userSlice.actions;
export default userSlice.reducer;
