import React from "react";
import { UserInfoProvider } from "./src/context/UserInfoContext";
import { Rotas } from "./src/routes";
import { Home } from "./src/screens/Home";


const App = () =>  {
  return (
    <UserInfoProvider>
      <Rotas />
    </UserInfoProvider>
  )
}
export default App