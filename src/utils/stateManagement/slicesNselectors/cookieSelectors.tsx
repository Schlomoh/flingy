import { useSelector } from "react-redux";

export const useCookieSelector = () => {
  return {
    analysisCookie: useSelector(
      (state: { cookies: IcookieInitialState }) => state.cookies.analysisCookies
    ),
    advertisementCookie: useSelector(
      (state: { cookies: IcookieInitialState }) =>
        state.cookies.advertisementCookies
    ),
  };
};

export const useCookieViewSelector = () => {
  return useSelector(
    (state: { cookies: IcookieInitialState }) => state.cookies.showManageView
  );
};
