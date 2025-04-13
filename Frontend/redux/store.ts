import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import reservationsSlice from "./reducers/reservationsSlice";

import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { logger } from "redux-logger";

const rootReducer = combineReducers({
  user: userReducer,
  reservations: reservationsSlice,
});

const configuration = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
    // return getDefaultMiddleware().concat(logger);
  },
});

export default store;
export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// persister.purge();
