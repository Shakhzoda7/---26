import React, { useEffect, useState } from "react";
import { Indicator } from "../components/Indicator";
import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const StepOne = () => {
  const [answerValue, setAnswerValue] = useState("");

  const [answerError, setAnswerError] = useState(false);

  useEffect(() => {
    if (!answerValue) {
      setAnswerError(true);
    } else {
      setAnswerError(false);
    }
  });

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
              hasError={answerError}
              value={answerValue}
              onChange={setAnswerValue}
              id="answer"
              isRequired
              inputPlaceholder="Ваш ответ"
              errorMessage="Введите ваш ответ"
            />
            <Button
              isDisabled={!answerValue}
              buttonType="button"
              buttonText="Далее"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
