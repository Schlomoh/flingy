import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";
import { useCookieSelector } from "../../utils/stateManagement/slicesNselectors/cookieSelectors";
import {
  setCookieSelection,
  setShowCookieModal,
  setShowManageView,
} from "../../utils/stateManagement/slicesNselectors/cookieSlice";
import store from "../../utils/stateManagement/store";
import Expander from "../baseComponents/baseExpander";
import StBaseButton from "../styleComponents/base/stBaseButton";
import StBaseText from "../styleComponents/base/stBaseText";
import CookieUtil from "./cookieUtil";

const StCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;

  p {
    margin: 0;
    margin-left: 20px;
  }

  input {
    margin: 0;
    width: 20px;
    height: 20px;

    appearance: none;
    border-radius: 100%;
    border: 2px solid ${(props) => props.theme.colors.lightGrey};
    transition: background-color 0.3s, border .5s;

    :checked {
      background-color: ${(props) => props.theme.colors.accent};
    }

    :disabled {
      background-color: ${(props) => props.theme.colors.lightGrey};
    }
    :active {
      border-color: grey;
    }
  }
`;

const StManageView = styled.div`
  #infoText {
    margin: 0;
  }

  #configButtons {
    margin-bottom: 30px;
  }
`;

export function submitSelection(selection: string[]) {
  const selectionObj = { analysis: false, advertisement: false };
  const cookieUtil = new CookieUtil();
  selection.forEach((name: string) => {
    switch (name) {
      case "analysis":
        selectionObj.analysis = true;
        break;
      case "advertisement":
        selectionObj.advertisement = true;
    }
  });
  cookieUtil.writeCookies(selectionObj);
  store.dispatch(setShowCookieModal(false));
  store.dispatch(setCookieSelection(selectionObj));
}

const ManageView = () => {
  const [selection, setSelection] = useState<string[]>([]);

  function closeManage() {
    store.dispatch(setShowManageView(false));
  }

  interface inp {
    text: string;
    name: string;
  }

  const ConfigurationButton = ({ text, name }: inp): JSX.Element => {
    function handleTick() {
      if (selection.includes(name)) {
        const newSelection = selection;
        const index = newSelection.findIndex((el: string) => el === name);
        newSelection.splice(index, 1);
        setSelection(newSelection);
      } else {
        setSelection([...selection, name]);
      }
    }

    return (
      <>
        <StCheckboxWrapper>
          <input
            type="checkbox"
            onChange={handleTick}
            disabled={name === "necessary" ? true : false}
            defaultChecked={
              name === "necessary" ? true : selection.includes(name)
            }
          />
          <p>{text}</p>
        </StCheckboxWrapper>
      </>
    );
  };

  const cookieSelection = useCookieSelector();

  useEffect(() => {
    let selectionArray: string[] = [];
    Object.keys(cookieSelection).forEach((element) => {
      if (cookieSelection[element]) {
        selectionArray.push(element);
      }
    });
    if (selection !== selectionArray && selection.length > 0)
      setSelection(selectionArray);
  }, [cookieSelection]);

  return (
    <StManageView>
      <StBaseButton small margin="0" padding="1px 5px" onClick={closeManage}>
        <IconContext.Provider value={{ size: "20px", color: "grey" }}>
          <FiChevronLeft />
        </IconContext.Provider>
      </StBaseButton>
      <StBaseText>
        <h3>Mange your cookie preferences</h3>
        <Expander>
          <p id="infoText">
            We use cookies and similar technologies on our website and process
            personal data about you, such as your IP address. We also share this
            data with third parties. The data processing may be done with your
            consent or on the basis of a legitimate interest, which you can
            object to in the individual privacy settings. You have the right to
            consent only to essential services and to change or revoke your
            consent in the privacy policy at a later time.
          </p>
        </Expander>
        <div id="configButtons">
          <ConfigurationButton
            name="necessary"
            text="Necessary for fundamental functionality"
          />
          <ConfigurationButton name="analysis" text="Analysis and statistics" />
          <ConfigurationButton
            name="advertisement"
            text="Advertisement and product placements"
          />
        </div>
      </StBaseText>
      <StBaseButton
        inner
        margin="0 0 20px"
        onClick={() => submitSelection(selection)}
      >
        Accept selected
      </StBaseButton>
      <StBaseButton
        inner
        margin="0"
        onClick={() => submitSelection(["analysis", "advertisement"])}
      >
        Accept all cookies
      </StBaseButton>
    </StManageView>
  );
};

export default ManageView;
