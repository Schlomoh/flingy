import { StCookieOverlay, StCookieBox } from "./style";
import { emoji } from "../GlobalComponents";
import { StButton, StTextWrapper } from "../StyledComps";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CookieBox(props: any): JSX.Element {
  const [showConfig, setShowConfig] = useState(false);
  const [consent, setConsent] = props.consent;

  const handleCookies = (selections: Array<string>) => {
    let selection: any = {
      show: true,
      necessary: true,
      analytics: false,
      advertisement: false,
    };
    selections.forEach((item: string) => {
      switch (item) {
        case "analytics":
          selection.analytics = true;
          break;
        case "advertisement":
          selection.advertisement = true;
          break;
      }
    });
    selection.show = false;
    console.log(selection);
    setConsent(selection);
  };

  function MainCookieScreen(): JSX.Element {
    return (
      <>
        <h2>Cookies, here to help {emoji(0x1f36a)}</h2>
        <StTextWrapper fat color="grey">
          <p>
            We use cookies to offer you our service. By clickting 'Accept' you
            consent to our use of cookies as described in our policy.
          </p>
        </StTextWrapper>

        <StButton
          onClick={() => {
            handleCookies(["analytics", "advertisement"]);
          }}
          color="light"
        >
          Accept
        </StButton>
        <StButton
          onClick={() => {
            setShowConfig(true);
          }}
          style={{ marginTop: "15px" }}
        >
          Manage
        </StButton>
      </>
    );
  }

  function CookieConfiguration(): JSX.Element {
    interface inp {
      text: string;
      type: string;
    }
    // const initialConsent = Object.keys(consent).reduce((accu: any, e) => {
    //   if (consent[e]) accu.push(e);
    //   return accu;
    // }, []);
    const [selection, setSelection]: any = useState([]);

    function ConfigurationButton({ text, type }: inp): JSX.Element {
      function handleTick() {
        if (selection.includes(type)) {
          let cutSelection = selection;
          cutSelection.splice(
            cutSelection.findIndex((el: any) => el === type),
            1
          );
          setSelection(cutSelection);
        } else {
          setSelection([...selection, type]);
        }
      }

      return (
        <StTextWrapper style={{ margin: "15px 0", width: "max-content" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <input
              type="checkbox"
              onChange={handleTick}
              defaultChecked={
                type === "necessary" ? true : selection.includes(type)
              }
              disabled={type === "necessary" ? true : false}
            />
            <p style={{ margin: "0 0 0 20px" }}>{text}</p>
          </div>
        </StTextWrapper>
      );
    }
    return (
      <>
        <StButton
          onClick={() => {
            setShowConfig(false);
          }}
          style={{ marginBottom: "30px" }}
          size="small"
        >
          Back
        </StButton>
        <h2>Configure your privacy settings</h2>
        <StTextWrapper fat color="grey">
          <p>
            We use cookies and similar technologies on our website and process
            personal data about you, such as your IP address. We also share this
            data with third parties. The data processing may be done with your
            consent or on the basis of a legitimate interest, which you can
            object to in the individual privacy settings. You have the right to
            consent only to essential services and to change or revoke your
            consent in the privacy policy at a later time.{" "}
          </p>
        </StTextWrapper>

        <StTextWrapper color="grey">
          <p>
            Take a look at the <Link to="privacy-policy">cookie policy</Link>
          </p>
        </StTextWrapper>

        <ConfigurationButton
          text="Necessary for fundamental functionality"
          type="necessary"
        />
        <ConfigurationButton text="Analysis and Statistics" type="analytics" />
        <ConfigurationButton text="Advertisement" type="advertisement" />
        <StButton
          onClick={() => {
            handleCookies(["advertisement", "analytics"]);
          }}
          color="light"
          style={{ marginTop: "15px" }}
        >
          Accept all
        </StButton>
        <StButton
          onClick={() => {
            handleCookies(selection);
          }}
          style={{ marginTop: "30px" }}
        >
          Accept selected
        </StButton>
      </>
    );
  }

  return (
    <StCookieBox>
      {showConfig ? <CookieConfiguration /> : <MainCookieScreen />}
    </StCookieBox>
  );
}

export function CookieConsentBox({ consent }: any): JSX.Element | null {
  return consent[0].show ? (
    <StCookieOverlay>
      <div id="cookieBackground">
        <div id="centerAlign">
          <CookieBox consent={consent} />
        </div>
      </div>
    </StCookieOverlay>
  ) : null;
}
