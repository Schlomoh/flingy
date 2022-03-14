import { useLayoutEffect, useState } from "react";
import {
  useCookieViewSelector,
  useShowCookieModalSelector,
} from "../../utils/stateManagement/slicesNselectors/cookieSelectors";
import {
  setCookieSelection,
  setShowCookieModal,
} from "../../utils/stateManagement/slicesNselectors/cookieSlice";
import store from "../../utils/stateManagement/store";
import BaseModal from "../baseComponents/baseModal";
import CookieUtil from "./cookieUtil";
import GreetingView from "./greetingView";
import ManageView from "./manageView";

const CookieInfo = () => {
  function getCurrentCookies(): ICookieSelection | null {
    const cookieUtil = new CookieUtil();
    const cookiesObject = cookieUtil.readCookies();
    return cookiesObject ? cookiesObject : null;
  }

  const showManage = useCookieViewSelector();
  const show = useShowCookieModalSelector();
  const content = showManage ? <ManageView /> : <GreetingView />;

  useLayoutEffect(() => {
    const cookies = getCurrentCookies();
    if (cookies) {
      store.dispatch(setCookieSelection(cookies));
    } else {
      store.dispatch(setShowCookieModal(true));
    }
  });

  return <BaseModal show={show}>{content}</BaseModal>;
};

export default CookieInfo;
