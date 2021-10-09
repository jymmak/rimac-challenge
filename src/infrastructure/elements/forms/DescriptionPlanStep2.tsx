import React, { FunctionComponent, useEffect, useState } from "react";
import { List, Divider } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { formatToCurrency } from "../../utils/validations/User";
import { useHistory } from "react-router-dom";

interface CarDetailsProps {
  amount: any;
}

const DescriptionPlanStep2: FunctionComponent<CarDetailsProps> = (props) => {
  const history = useHistory();
  const [list] = useState([
    { title: "Llanta de respuesto" },
    { title: "Analisis de motor" },
    { title: "Aros gratis" },
  ]);
  const [amount, setAmount] = useState("20");
  useEffect(() => {
    if (props.amount != null) {
      setAmount(props.amount);
    }
  }, [props.amount]);
  const onWantClick = (event: any) => {
    history.push(`/thanks`);
  };
  return (
    <div>
      <div className="details-form-01">
        <div>
          <h3 className="regular-font">Monto</h3>
          <h2 className="title05">{"$" + formatToCurrency(amount)}</h2>
          <span className="subtitle03">mensuales</span>
        </div>
      </div>
      <div className="details-02-image">
        <Divider />
        <h1 className="regular-font">El precio incluye:</h1>
        <br></br>
        <List
          itemLayout="horizontal"
          dataSource={list}
          split={false}
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta avatar={<CheckOutlined />} title={item.title} />
            </List.Item>
          )}
        />
        <button className="general_button" onClick={onWantClick}>
          LO QUIERO
        </button>
      </div>
    </div>
  );
};

export default DescriptionPlanStep2;
