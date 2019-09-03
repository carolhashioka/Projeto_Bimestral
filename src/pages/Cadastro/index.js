import React from "react";
import Email from "../../components/InputEmail";
import Senha from "../../components/InputSenha";
import Nome from "../../components/InputNome";
import Botao from "../../components/BotaoCadastro";
import { Container } from "./styles";
import { Link } from "react-router-dom";
// import {Link, Router} from 'react-router-dom';
export default function Cadastrar() {
  return (
    <Container>
      <div className="titulo">Cadastro</div>
      <Nome />
      <br />
      <Email />
      <br />
      <Senha />
      <br />
      <div className="botaoCadastro">
        <Botao />
      </div>
      <Link className="link" to="/">
        Login
      </Link>
    </Container>
  );
}
