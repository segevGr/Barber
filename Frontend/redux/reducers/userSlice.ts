import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateProps = {
  isLoggedIn: boolean;
  username: string;
  phoneNumber: string;
  email: string;
  isNotificationAllowed: boolean;
};

const initialState: UserStateProps = {
  isLoggedIn: false,
  username: "",
  phoneNumber: "",
  email: "",
  isNotificationAllowed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedInRedux: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUsernameRedux: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPhoneNumberRedux: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setEmailRedux: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setIsNotificationsAllowedRedux: (state, action: PayloadAction<boolean>) => {
      state.isNotificationAllowed = action.payload;
    },
  },
});

export const {
  setIsLoggedInRedux,
  setUsernameRedux,
  setPhoneNumberRedux,
  setEmailRedux,
  setIsNotificationsAllowedRedux,
} = userSlice.actions;
export default userSlice.reducer;
