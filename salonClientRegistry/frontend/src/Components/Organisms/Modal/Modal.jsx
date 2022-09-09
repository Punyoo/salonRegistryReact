import React from "react";

import {
  StyledOverlay,
  StyledModalWrapper,
  StyledModal,
  StyledCloseButton,
  StyledCloseButtonWrapper,
} from "./Modal.style";

const Modal = ({ children, onClose }) => {
  return (
    <StyledOverlay>
      <StyledModalWrapper>
        <StyledModal>
          <StyledCloseButtonWrapper onClick={onClose}>
            <StyledCloseButton>x</StyledCloseButton>
          </StyledCloseButtonWrapper>
          {children}
        </StyledModal>
      </StyledModalWrapper>
    </StyledOverlay>
  );
};

export default Modal;
