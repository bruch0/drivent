/* eslint-disable no-restricted-syntax */
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import AuthLayout from "../../layouts/Auth";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Row, Title, Label } from "../../components/Auth";
import Link from "../../components/Link";

import EventInfoContext from "../../contexts/EventInfoContext";

import useApi from "../../hooks/useApi";

export default function Enroll() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadingEnroll, setLoadingEnroll] = useState(false);

  const history = useHistory();

  const api = useApi();

  const { eventInfo } = useContext(EventInfoContext);

  function submit(event) {
    event.preventDefault();
    setLoadingEnroll(true);

    if (password !== confirmPassword) {
      toast("As senhas devem ser iguais!");
      setLoadingEnroll(false);
    } else {
      api.user
        .signUp(email, password)
        .then(() => {
          toast("Inscrito com sucesso! Por favor, faça login.");
          history.push("/sign-in");
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 409) {
              toast("E-mail já cadastrado");
            } else {
              toast("Preencha os campos corretamente");
            }
          } else {
            toast("Não foi possível conectar ao servidor!");
          }
        })
        .then(() => {
          setLoadingEnroll(false);
        });
    }
  }

  return (
    <AuthLayout background={eventInfo.backgroundImage}>
      <Row>
        <img src={eventInfo.logoImage} alt="Event Logo" />
        <Title>{eventInfo.eventTitle}</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input
            label="E-mail"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Repita sua senha"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingEnroll}>
            Inscrever
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
