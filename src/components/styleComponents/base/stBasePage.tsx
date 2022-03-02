import styled from "styled-components";

export const bp = {
  xs: "320px",
  sm: "480px",
  md: "640px",
  lg: "720px",
  xl: "1024px",
  xxl: "1366px",
};

const StBasePage = styled.main`
  // alignment
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StCenterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  justify-content: space-between;

  padding: 60px 40px 30px 40px;
  max-width: calc(100vw - 80px);

  // responsivenes
  @media screen and (min-width: ${bp.sm}) {
    max-width: ${bp.sm};
  }
  @media screen and (min-width: ${bp.xl}) {
    max-width: ${bp.md};
  }
  @media screen and (min-width: ${bp.xxl}) {
    max-width: ${bp.lg};
  }
`;

export default StBasePage;
