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
    max-width: calc(100vw - 80px);
    @media screen and (min-width: ${bp.sm}) {
    
      max-width: ${bp.sm};
    }
    @media screen and (min-width: ${bp.xl}) {
      max-width: ${bp.md};
    }
    @media screen and (min-width: ${bp.xxl}) {
      max-width: ${bp.lg};
    }
  }
`;

export default StBasePage;
