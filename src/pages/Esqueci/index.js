import React from "react";
import Email from "../../components/InputEmail";
import Botao from "../../components/BotaoEnviarEsqueci";
import { Container } from "./styles";
import { Link } from "react-router-dom";
export default function Esqueci() {
  return (
    <Container>
      <div className="titulo">Recuperar senha</div>
      <Email />
      <div className="botaoenviaresq">
        <Botao />
      </div>
      <Link to="/">Login</Link>
    </Container>
  );
}
