import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  max-width: 250px;
  padding: 10px 20px 20px 20px;

  background-color: #fff;

  -webkit-box-shadow: 0px 0px 39px 1px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 0px 39px 1px rgba(0, 0, 0, 0.1);
`;

export const StyledCloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-bottom: 10px;
`;

export const StyledCloseButton = styled.span`
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
