import React, { FunctionComponent, useEffect, useState } from "react";
import { Typography, PageHeader, Card, Tabs } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";
import CollapseForm from "./CollapseForm";
import { useHistory } from "react-router-dom";

const { Text } = Typography;
const { TabPane } = Tabs;

interface CarDetailsProps {
  returnPage: () => void;
  addAmount: (index: any) => void;
  removeAmount: (index: any) => void;
  userBody: any;
  bodyAmount: any;
  updateBodyAmount: (index: any) => void;
}
const CarPlanForm: FunctionComponent<CarDetailsProps> = (props) => {
  const router = useHistory();
  const [license, setLicense] = useState("");
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    if (props.userBody != null) {
      setLicense(props.userBody.License);
      setYear(props.userBody.Year);
      setBrand(props.userBody.Brand);
    }
  }, [props.userBody]);

  function callback(key: any) {
    console.log(key);
  }

  return (
    <div className="">
      <div className="details-form-01 w-80">
        <div>
          <PageHeader
            onBack={() => router.push("/login")}
            title="Volver"
            backIcon={<LeftCircleOutlined />}
          />
        </div>
        <div>
          <Text className="title04">¡Hola, Juan !</Text>
          <br></br>
          <Text className="subtitle02">Conoce las coberturas para tu plan</Text>

          <Card className="background-2page">
            <p className="rob-text">{"Placa: " + license}</p>
            <p className="subtitle06">{brand + " " + year}</p>
          </Card>
        </div>
        <div>
          <Text className="subtitle06 m-tb">Agrega o quita coberturas</Text>

          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Protege a tu auto" key="1">
              <CollapseForm
                addAmount={props.addAmount}
                removeAmount={props.removeAmount}
                bodyAmount={props.bodyAmount}
                updateBodyAmount={props.updateBodyAmount}
              />
            </TabPane>
            <TabPane tab="Protege a los que te rodean" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Mejora tu plan" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CarPlanForm;
