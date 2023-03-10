import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "./App.css";

import { Header } from "./components/Header";

function App() {
  return (
    <Flex flexDir="column" flex="1" h="100vh">
      <Header />
      <Outlet />
    </Flex>
  );
}

export default App;
