import styled from "styled-components";

export const StyledUl = styled.ul`
  background-color: #f1f1f1;
  color: #000000f9;

  border-bottom: 1px solid #00000014;

  max-width: 1280px;
  margin: auto;
  padding: 5px;

  display: flex;
  justify-content: space-between;

  font-size: 18px;
`;

export const StyledLi = styled.li`
  flex: 1;
`;

export const StyledButton = styled.div`
  width: 50px;
  font-size: 14px;
  text-align: center;
  padding-top: 2px;
  color: #fffffff2;

  background-color: #ec2727ce;

  border: none;
  border-radius: 3px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const Hourglass = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

export const StyledNav = styled.nav`
  max-width: 1280px;
  margin: auto;
  padding-top: 5px;
`;

export const StyledUlPagination = styled.ul`
  display: flex;
  gap: 10px;
`;

export const StyledLiPagination = styled.li`
  background-color: #c3c3c3;
  color: white;
  border-radius: 3px;
  width: 20px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
