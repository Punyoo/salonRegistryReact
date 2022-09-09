import React from "react";
import Form from "../Organisms/RegistryForm/Form";
import ClientList from "../Organisms/ClientList/ClientList";

const MainScreen = () => {
  return (
    <div>
      <Form />
      <ClientList />
    </div>
  );
};

export default MainScreen;
