import React from "react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading
            text="Добро пожаловать в квиз от лучшего учебного центра"
            headingType="h1"
          />
          <form className="welcome__form">
            <Input
              id="username "
              isRequired
              inputLabel="Ваше имя"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваше имя"
            />
            <Input
              id="phone"
              isRequired
              inputLabel="Ваше номер"
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите номер в правильном формате"
            />
            <label className="input-wrapper" htmlFor="username">
            </label>
            <Button buttonType="button" buttonText="Далее" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
