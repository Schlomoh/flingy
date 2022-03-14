import { useSelector } from "react-redux";

export const useCookieSelector = () => {
  return useSelector(
    (state: { cookies: IcookieInitialState }) => state.cookies.selection
  );
};

export const useCookieViewSelector = () => {
  return useSelector(
    (state: { cookies: IcookieInitialState }) => state.cookies.showManageView
  );
};

export const useShowCookieModalSelector = () => {
  return useSelector(
    (state: { cookies: IcookieInitialState }) => state.cookies.showModal
  );
};
