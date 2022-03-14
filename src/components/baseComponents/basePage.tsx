import { useLayoutEffect, useRef } from "react";
import StBasePage, {
  StCenterContainer,
} from "../styleComponents/base/stBasePage";

const BasePage = ({ children, className }: IcomponentChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    // start (for cleaner css. Otherwise id had to put opacity: 0 causing confusion when only seeing the css)
    if (ref.current) {
      ref.current.style.opacity = "0";
      ref.current.style.transform = "scale(1.25)";
    }
    // on load
    setTimeout(() => {
      if (ref.current) {
        ref.current.style.opacity = "1";
        ref.current.style.transform = "scale(1)";
      }
    }, 120);
    // on unmount
    return () => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "scale(1.25)";
      }
    };
  });
  return (
    <StBasePage ref={ref}>
      <StCenterContainer>
        {children}
        <div id="footnoteContainer">
          <p>© 2022 Moritz Becker | moritzbecker.de</p>
        </div>
      </StCenterContainer>
    </StBasePage>
  );
};

export default BasePage;
