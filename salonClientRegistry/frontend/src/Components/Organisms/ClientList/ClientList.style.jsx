import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 1280px;

  background-color: #e7e7e7;

  padding-left: 5px;

  display: flex;
  justify-content: space-between;
  margin: auto;

  font-size: 20px;

  &:nth-child(1) {
    flex: 1;
  }
  &:nth-child(2) {
    flex: 1;
  }
  &:nth-child(3) {
    flex: 2;
  }
`;
