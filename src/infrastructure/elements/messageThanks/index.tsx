import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { userDataProps } from "../../../domain/models/User";
import {responseDataUser} from '../../../domain/services/User.service'

const MessageThanks = () => {
  const router = useHistory();
  const [data, setData] = useState<userDataProps>();

  useEffect(() => {
    getUser().then((user) => {
      setData(user);
    });
  }, []);

  const getUser = async () => {
    const response = await responseDataUser;
    const data = await response.json();
    return data;
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="container_thanks">
          <span className="title_welcome">¡Te damos la bienvenida! </span>
          <h1>Cuenta con nosotros para proteger tu vehículo </h1>
          <p>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:
            <br /> <span className="email">{data?.email}</span>
          </p>

          <button
            type="submit"
            className="general_button"
            onClick={() => router.push("/login")}
          >
            CÓMO USAR MI SEGURO
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageThanks;
