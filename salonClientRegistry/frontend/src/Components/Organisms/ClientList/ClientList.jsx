import React from "react";
import UserLiItems from "../../Atoms/UsersLiItems/UsersLiItems";

import { StyledDiv } from "./ClientList.style";

const ClientList = () => {
  return (
    <>
      <StyledDiv>
        <p>Name</p>
        <p>Email</p>
        <p>Date and time</p>
        <p></p>
      </StyledDiv>
      <UserLiItems />
    </>
  );
};

export default ClientList;
