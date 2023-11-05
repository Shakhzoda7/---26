import React from "react";
import { Indicator } from "../components/Indicator";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator
            description="Скидка за прохождение опроса:"
            value="15%"
          />
          <div className="question">
            <Heading
              text="1. Занимательный вопрос"
              headingType="h2"
            />
            <Input
              id="answer"
              isRequired
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваш ответ"
            />
            <Button
              buttonType="button"
              buttonText="Далее"
              isDisabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
