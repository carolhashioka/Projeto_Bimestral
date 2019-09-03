import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Cadastrar from "./pages/Cadastro";
import Login from "./pages/Login";
import Esqueci from "./pages/Esqueci";
export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/cadastro" component={Cadastrar} />
      <Route path="/esqueci" component={Esqueci} />
    </BrowserRouter>
  );
}
