import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { persistStore } from "redux-persist";
import store, { RootState } from "../redux/store";

const useUserData = (): { isLoading: boolean; isLoggedIn: boolean } => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    const loadPersistedData = () => {
      persistStore(store, null, () => {
        setIsLoading(false);
      });
    };
    loadPersistedData();
  }, []);

  return { isLoading, isLoggedIn };
};

export default useUserData;
