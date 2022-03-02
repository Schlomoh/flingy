import { useState } from "react";
import { useCookieViewSelector } from "../../utils/stateManagement/slicesNselectors/cookieSelectors";
import GreetingView from "./greetingView";
import ManageView from "./manageView";

const CookieInfo = () => {
  const showManage = useCookieViewSelector();
  const [show, setShow] = useState(false);
  const content = showManage ? <ManageView /> : <GreetingView />;

  function getCurrentCookies() {
    document.cookie;
  }

  return <>{content}</>;
};

export default CookieInfo;
