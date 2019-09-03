import React from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Login />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
