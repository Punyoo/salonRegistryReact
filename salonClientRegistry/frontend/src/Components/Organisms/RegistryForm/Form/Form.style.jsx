import styled from "styled-components";

export const StyledForm = styled.form`
  width: 320px;

  margin: auto;
  margin-bottom: 50px;
  margin-top: 50px;

  padding: 10px;
  border-radius: 5px;

  background-color: #f1f1f1;

  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const StyledDiv = styled.div`
  width: 500px;
  margin: auto;
`;

export const StyledButton = styled.button`
  width: 150px;
  height: 25px;

  border: none;
  border-radius: 3px;

  color: white;

  background-color: #3d98d0d9;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
