import { useEffect, useState } from "react";

import {
  StPopIn,
  StTextWrapper,
  StButton,
  StIcon,
  stdBlue,
  StInfoPopUp,
  StReloadInfo,
} from "./styledComps";

import { PulseLoader } from "react-spinners";
import { Container, Row, Col } from "react-grid-system";
import { FiCopy } from "react-icons/fi";
import { FiRotateCw } from "react-icons/fi";
import { getStarter } from "./tools/get_starter";
import { CenterPageRow, FadeIn } from "./globalComponents";

const MessageField = ({ children, loading, result, select }: any) => {
  useEffect(() => {
    if (loading.state) {
      setTimeout(() => {
        loading.set(false);
        let nValue = {
          message: result.values[select.value].message,
          rValue: result.values[select.value].rValue,
          shown: true,
        };
        let values = result.values;
        values[select.value] = nValue;
        result.set(values);
      }, 3000);
    }
  });

  return (
    <div className="textField">
      <div className="message">
        {loading.state ? (
          <PulseLoader color="white" size={10} />
        ) : (
          <FadeIn fast grow>
            <div id="textMessage">
              <p style={{fontFamily:'sans-serif'}}>{children}</p>
            </div>
          </FadeIn>
        )}
      </div>
      {loading.state ? null : (
        <FadeIn slow>
          <p className="littleText">Delivered</p>
        </FadeIn>
      )}
    </div>
  );
};

const CopyMessage = ({ result, select }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      {navigator.clipboard ? (
        <StButton
          className="noSelect"
          disabled={Boolean(showInfo)}
          color="lightgreen"
          onClick={() => {
            navigator.clipboard.writeText(result.values[select.value].message);
            setShowInfo(true);
            console.log("Copied message to clipboard.");
            setTimeout(() => {
              setShowInfo(false);
            }, 2000);
          }}
        >
          Copy Message
        </StButton>
      ) : null}
      <StInfoPopUp show={showInfo}>
        <Container>
          <Row>
            <Col
              xs={2}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <StIcon size="28px" color="lightgreen">
                <FiCopy />
              </StIcon>
            </Col>
            <Col xs={10}>
              <StTextWrapper fat color="lightgreen">
                <p>Copied message into clipboard.</p>
              </StTextWrapper>
            </Col>
          </Row>
        </Container>
      </StInfoPopUp>
    </div>
  );
};

const ReloadInfo = ({ reload }: any) => {
  useEffect(() => {
    setTimeout(() => {
      reload.set(false);
    }, 1800);
  });
  return (
    <StReloadInfo show={reload.value}>
      <StIcon size="48px" color="grey">
        <FiRotateCw />
      </StIcon>
      <StTextWrapper align="center" fat color="grey">
        <p>Re-Generating</p>
      </StTextWrapper>
    </StReloadInfo>
  );
};

export const PopIn: React.FC<any> = ({
  result,
  select,
  show,
  heading,
  text,
  nsfw,
}: any) => {
  const [isLoading, setLoading] = useState(true);
  const [reloadInfo, setReloadInfo] = useState(false);

  useEffect(() => {
    setLoading(!result.values[select.value]?.shown);
  }, [result.values, select.value]);

  return (
    <StPopIn show={show.value}>
      {reloadInfo ? (
        <ReloadInfo reload={{ value: reloadInfo, set: setReloadInfo }} />
      ) : null}

      <Container id="DetailPopIn">
        <CenterPageRow>
          <StTextWrapper fat style={{ paddingTop: "25px" }}>
            {heading}
          </StTextWrapper>
          <StTextWrapper color="grey">{text}</StTextWrapper>
        </CenterPageRow>

        {show.value ? (
          <CenterPageRow>
            <MessageField
              loading={{ set: setLoading, state: isLoading }}
              result={result}
              select={select}
            >
              {result.values[select.value]?.message}
            </MessageField>
          </CenterPageRow>
        ) : null}

        {!isLoading ? (
          <FadeIn>
            <CenterPageRow>
              <StTextWrapper fat color="grey">
                <p style={{ marginBottom: "20px" }}>
                  This Person is{" "}
                  <strong style={{ color: stdBlue }}>
                    {result.values[select.value]?.rValue}%{" "}
                  </strong>
                  likely to respond.
                </p>
              </StTextWrapper>
            </CenterPageRow>
            <CenterPageRow>
              <CopyMessage select={select} result={result} />
              <StButton
              style={{marginTop: '15px'}}
                className="noSelect"
                onClick={() => {
                  let p: any = [];
                  for (let i = 0; i < result.values.length; i++) {
                    result.values[i] === result.values[select.value]
                      ? (p[i] = getStarter({ selection: "", nsfwAllowed: nsfw }))
                      : (p[i] = result.values[i]);
                  }
                  setReloadInfo(true);
                  setTimeout(() => {
                    result.set(p);
                    show.set(false);
                  }, 2000);
                }}
              >
                Generate new
              </StButton>
            </CenterPageRow>
          </FadeIn>
        ) : null}
      </Container>
      <div
        className="noSelect"
        id="popinBackground"
        onClick={() => {
          show.set(false);
        }}
      />
    </StPopIn>
  );
};
