import { Button, Collapse } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { FunctionComponent, useEffect, useState } from "react";

const { Panel } = Collapse;

interface CollapseProps {
  addAmount: (index: any) => void;
  removeAmount: (index: any) => void;
  bodyAmount: any;
  updateBodyAmount: (index: any) => void;
}

const CollapseForm: FunctionComponent<CollapseProps> = (props) => {
  const [isAdd, setIsAdd] = useState({
    step1: true,
    step2: true,
    step3: true,
  });

  useEffect(() => {
    if (props.bodyAmount != null) {
      setIsAdd(props.bodyAmount);
    }
  }, [props.bodyAmount]);

  const ButtonPlan = (
    addPlan: any,
    removePlan: any,
    step: number,
    isAdd: boolean
  ) => {
    const text =
      "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más";
    return (
      <div className="content_collapse">
        {isAdd && (
          <div>
            <Button
              type="link"
              className="link-text"
              htmlType="button"
              onClick={() => addPlan(step)}
              icon={<PlusCircleOutlined />}
            >
              Agregar
            </Button>
          </div>
        )}
        {!isAdd && (
          <div>
            <Button
              type="link"
              className="link-text"
              htmlType="button"
              onClick={() => removePlan(step)}
              icon={<MinusCircleOutlined />}
            >
              Quitar
            </Button>
            <p className="paragraph2">{text}</p>
          </div>
        )}
      </div>
    );
  };
  const addPlan = (step: any) => {
    switch (step) {
      case 1:
        props.addAmount("parcial");
        props.updateBodyAmount({ ...isAdd, step1: false });
        setIsAdd({ ...isAdd, step1: false });
        break;
      case 2:
        props.addAmount("choque");
        props.updateBodyAmount({ ...isAdd, step2: false });
        setIsAdd({ ...isAdd, step2: false });
        break;
      case 3:
        props.addAmount("perdida");
        props.updateBodyAmount({ ...isAdd, step3: false });
        setIsAdd({ ...isAdd, step3: false });
        break;
      default:
        break;
    }
  };
  const removePlan = (step: any) => {
    switch (step) {
      case 1:
        props.removeAmount("parcial");
        props.updateBodyAmount({ ...isAdd, step1: true });
        setIsAdd({ ...isAdd, step1: true });
        break;
      case 2:
        props.removeAmount("choque");
        props.updateBodyAmount({ ...isAdd, step2: true });
        setIsAdd({ ...isAdd, step2: true });
        break;
      case 3:
        props.removeAmount("perdida");
        props.updateBodyAmount({ ...isAdd, step3: true });
        setIsAdd({ ...isAdd, step3: true });
        break;
      default:
        break;
    }
  };

  return (
    <Collapse defaultActiveKey={["1"]} ghost expandIconPosition="right">
      <Panel
        className="subtitle06"
        header="Llanta robada"
        key="1"
        extra={
          <img
            alt=""
            width="48"
            src="https://www.rimac.com/content/dam/rimac/publica/pagina-producto/vehicular-flexible/simulador/protege_vehiculo/icon_roboparcial.svg"
          ></img>
        }
      >
        <div className="m-lr">
          {ButtonPlan(addPlan, removePlan, 1, isAdd.step1)}
        </div>
      </Panel>
      <Panel
        className="subtitle06"
        header="Choque y/o pasarte la luz roja"
        key="2"
        extra={
          <img
            alt=""
            width="48"
            src="https://www.rimac.com/content/dam/rimac/publica/pagina-producto/vehicular-flexible/simulador/protege_vehiculo/icon_perdidaparcial.svg"
          ></img>
        }
      >
        <div className="m-lr">
          {ButtonPlan(addPlan, removePlan, 2, isAdd.step2)}
        </div>
      </Panel>
      <Panel
        className="subtitle06"
        header="Atropello en la vía Evitamiento"
        key="3"
        extra={
          <img
            alt=""
            width="48"
            src="https://www.rimac.com/content/dam/rimac/publica/pagina-producto/vehicular-flexible/simulador/protege_vehiculo/icon_perdidatotal.svg"
          ></img>
        }
      >
        <div className="m-lr">
          {ButtonPlan(addPlan, removePlan, 3, isAdd.step3)}
        </div>
      </Panel>
    </Collapse>
  );
};
export default CollapseForm;
