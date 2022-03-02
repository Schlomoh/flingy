import { ReactChild } from "react";
import StBaseModal from "../styleComponents/base/stBaseModal";
import StBasePage from "../styleComponents/base/stBasePage";
import BasePage from "./basePage";

const BaseModal = ({ children, show }: IcomponentChildren) => {
  return (

      <StBaseModal show={show}>
        <div className="modalBackground"></div>
        <div className="modal">{children}</div>
      </StBaseModal>

  );
};

export default BaseModal;
