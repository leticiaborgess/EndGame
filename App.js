import React from "react";
import { UserInfoProvider } from "./src/context/UserInfoContext";
import { Home } from "./src/screens/Home";


const App = () =>  {
  return (
    <UserInfoProvider>
      <Home />
    </UserInfoProvider>
  )
}
export default App