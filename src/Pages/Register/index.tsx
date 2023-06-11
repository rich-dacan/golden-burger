import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import shoppingBag from "../../assets/Shopping-bag.svg";
import dots from "../../assets/Dots.svg";

import Input from "../../Components/Input";
import { iRegisterFormValues } from "./@types";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { UserContext } from "../../Contexts/UserContext";
import { StyledButton, StyledLink } from "../../Styles/buttons-style";
import { RegisterWrapper, StyledRegister } from "./register-style";
import { BurgerAnimation } from "../../Components/Animations/BurgerAnimation";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<iRegisterFormValues> = async formData => {
    userRegister(formData, setLoading);
    reset();
  };

  return (
    <StyledRegister>
      <div className="brand">
        <BurgerAnimation />

        <div className="brand__children">
          <figure>
            <img src={shoppingBag} alt="Kenzie Hub slogan" />
          </figure>
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </p>
        </div>

        <figure className="dots">
          <img src={dots} alt="Dots style" />
        </figure>
      </div>

      <RegisterWrapper>
        {/* <h1>Golden Burger</h1> */}
        <div className="content">
          <div className="content-header">
            <h2>Cadastro</h2>
            <StyledLink className="grey-Link" to={"/"}>
              Retornar para o login
            </StyledLink>
          </div>

          <div>
            <form noValidate onSubmit={handleSubmit(submit)}>
              <Input
                type="text"
                id="name"
                label="Nome "
                error={errors.name}
                placeholder="Digite aqui o seu nome"
                register={register("name")}
                disabled={loading}
              />
              {errors.name && (
                <p className="p-error" aria-label="Error: Name">
                  {errors.name.message}
                </p>
              )}

              <Input
                type="text"
                label="Email"
                id="email"
                error={errors.email}
                placeholder="Seu e-mail"
                register={register("email")}
                disabled={loading}
              />
              {errors.email && (
                <p className="p-error" aria-label="Error: E-mail">
                  {errors.email.message}
                </p>
              )}

              <Input
                type="password"
                label="Senha"
                id={"password"}
                error={errors.password}
                placeholder="Sua senha"
                register={register("password")}
                disabled={loading}
                autoComplete="autoComplete"
              />
              {errors.password && (
                <p className="p-error" aria-label="Error: Password">
                  {errors.password.message}
                </p>
              )}

              <Input
                autoComplete="autoComplete"
                type="password"
                error={errors.passwordConfirm}
                id="passwordConfirm"
                label="Confirmar Senha "
                placeholder="Confirme aqui a sua senha"
                register={register("passwordConfirm")}
                disabled={loading}
              />
              {errors.passwordConfirm && (
                <p
                  className="p-error"
                  aria-label="Error: Password Confirmation"
                >
                  {errors.passwordConfirm.message}
                </p>
              )}

              <StyledButton
                className="golden-button-default"
                type="submit"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Cadastrar"}
              </StyledButton>
            </form>
          </div>
        </div>
      </RegisterWrapper>
    </StyledRegister>
  );
};

export default RegisterPage;
