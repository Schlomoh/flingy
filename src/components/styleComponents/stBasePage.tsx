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
  align-items: center;
  // colors

  .centerContainer {
      // responsivenes
    padding: 60px 40px;
    min-width: calc(100vw - 80px);
    @media screen and (min-width: ${bp.sm}) {
      min-width: ${bp.xs};
    }
    @media screen and (min-width: ${bp.xl}) {
      min-width: ${bp.md};
    }
    @media screen and (min-width: ${bp.xxl}) {
      min-width: ${bp.lg};
    }

    h1,h2,h3,h4,p,a {
        width: fit-content;
    }

  }
`;

export default StBasePage;
