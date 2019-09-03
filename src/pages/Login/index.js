import React from "react";
import Email from "../../components/InputEmail";
import Senha from "../../components/InputSenha";
import Botao from "../../components/BotaoLogin";
import { Container } from "./styles";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <Container>
      <div className="titulo">Login</div>
      <Email />
      <br />
      <Senha />
      <div className="botaoLogin">
        <Botao />
      </div>
      <Link to="/cadastro">Cadastrar-se</Link>
      <Link to="/esqueci"> Esqueci minha senha</Link>
    </Container>
  );
}
