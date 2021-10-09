import React, { FunctionComponent, useState } from "react";
import { Steps, Progress } from "antd";
import CarPlanForm from "../elements/forms/CarPlanForm";
import DescriptionPlanStep2 from "../elements/forms/DescriptionPlanStep2";

const { Step } = Steps;

const PlanPage: FunctionComponent = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [amount, setAmount] = useState(20);
  const [bodyAmount, setBodyAmount] = useState({
    step1: true,
    step2: true,
    step3: true,
  });

  const [userBody] = useState({
    Year: "2019",
    Brand: "Wolkswagen Golf",
    License: "C2U-114",
  });

  const returnStep = () => {
    setCurrentStep(0);
  };

  const updateBodyAmount = (obj: any) => {
    if (obj != null) {
      setBodyAmount(obj);
    }
  };
  const addAmount = (plan: any) => {
    let value = amount;
    switch (plan) {
      case "parcial":
        value = value + 15;
        setAmount(value);
        break;
      case "choque":
        value = value + 35;
        setAmount(value);
        break;
      case "perdida":
        value = value + 50;
        setAmount(value);
        break;
      default:
        break;
    }
  };
  const removeAmount = (plan: any) => {
    let value = amount;
    switch (plan) {
      case "parcial":
        value = value - 15;
        setAmount(value);
        break;
      case "choque":
        value = value - 20;
        setAmount(value);
        break;
      case "perdida":
        value = value - 50;
        setAmount(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="container_inline">
          <div className="container_step">
            <div className="steps_desktop">
              <Steps className="" direction="vertical" current={currentStep}>
                <Step title="Datos" />
                <Step title="Arma tu Plan" />
              </Steps>
            </div>
            <div className="steps-mobile pt-20">
              <div className="w-80 progress-bar">
                <div>
                  <h4>Paso {currentStep + 1} de 2</h4>
                </div>
                <div>
                  <Progress percent={currentStep * 50} showInfo={false} />
                </div>
              </div>
            </div>
          </div>
          <div className="container_content">
            {currentStep === 0}
            {currentStep === 1 && (
              <CarPlanForm
                returnPage={returnStep}
                addAmount={addAmount}
                removeAmount={removeAmount}
                userBody={userBody}
                bodyAmount={bodyAmount}
                updateBodyAmount={updateBodyAmount}
              />
            )}
          </div>
          <div className="margin-content-tb pt-10">
            {currentStep === 0}
            {currentStep === 1 && <DescriptionPlanStep2 amount={amount} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
