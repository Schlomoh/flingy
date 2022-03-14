import styled from "styled-components";
import { setShowManageView } from "../../utils/stateManagement/slicesNselectors/cookieSlice";
import store from "../../utils/stateManagement/store";
import StBaseButton from "../styleComponents/base/stBaseButton";
import StBaseText from "../styleComponents/base/stBaseText";
import { submitSelection } from "./manageView";

const StGreetingView = styled.div``;

const showManage = () => {
  store.dispatch(setShowManageView(true));
};

const GreetingView = () => {
  return (
    <StGreetingView>
      <StBaseText>
        <h3>This site uses cookies</h3>
        <p>
          We use cookies to offer you our service. By clickting 'Accept' you
          consent to our use of cookies as described in our policy.
        </p>
      </StBaseText>
      <StBaseButton onClick={showManage} inner margin="0 0 20px">
        Manage cookie settings
      </StBaseButton>
      <StBaseButton
        onClick={() => submitSelection(["analysis", "advertisement"])}
        inner
        margin="0"
      >
        Accept all cookies
      </StBaseButton>
    </StGreetingView>
  );
};

export default GreetingView;
