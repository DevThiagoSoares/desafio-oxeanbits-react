import React from 'react';
import { Form, Field, FormElement, FieldRenderProps, FormRenderProps, FieldWrapper } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import "@progress/kendo-theme-default/dist/all.css";
import { useNavigate } from "react-router-dom";
import "./index.css"; // Importe seu arquivo de estilos personalizados

const emailRegex: RegExp = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";

const EmailInput = (fieldRenderProps: FieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div className="input-wrap">
      <Input {...others} className="custom-input" />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};


export const LoginForm = () => {
  const navigation = useNavigate();

  const handleSubmit = (dataItem: { [name: string]: any }) => {
    const { email, password } = dataItem;
    if (email === "seu@email.com" && password === "suaSenha") {
      navigation("/feed");
    } else {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="form-container-wrapper">
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps: FormRenderProps) => (
          <FormElement className="form-container">
            <div className="form-content">
              <h2 className="form-title">Login</h2>
              <FieldWrapper>
                <Field
                  name={"email"}
                  type={"email"}
                  component={EmailInput}
                  label={"Email"}
                  validator={emailValidator}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name={"password"}
                  type={"password"}
                  component={Input}
                  label={"Senha"}
                />
              </FieldWrapper>
              <div className="form-buttons">
                <button
                  type={"submit"}
                  className="custom-button"
                  disabled={!formRenderProps.allowSubmit}
                >
                  Entrar
                </button>
              </div>
            </div>
          </FormElement>
        )}
      />
    </div>
  );
};

