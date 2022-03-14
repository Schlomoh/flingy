import StBaseModal from "../styleComponents/base/stBaseModal";


const BaseModal = ({ children, show }: IcomponentChildren) => {
  return (
    <StBaseModal show={show}>
      <div className="modalBackground"></div>
      <div className="modal">{children}</div>
    </StBaseModal>
  );
};

export default BaseModal;
