import React from "react";
import { Button } from "../common";

const RegistrationInfo = ({ registration }) => {
  const answer = () => {
    let [first] = registration.name.split(" ");
    const msg = `Hola ${first}, cómo estás! Recibimos tu registro en nuestra web a nuestro Taller de Skincare, accediste a nuestro descuento! y ya estas registrada! El pago puedes hacerlo por QR, depósito bancario, ó en nuestras instalaciones si te encuentras en Cochabamba, tu cupo ya esta reservado :)`;
    window.open(`https://api.whatsapp.com/send/?phone=${registration.phone}&type=phone_number&app_absent=0&text=${msg}`, "_blank", "noreferrer");
  };

  return (
    <div className="p-4">
      <div>{registration.name}</div>
      <div>{registration.phone}</div>
      <div>{registration.email}</div>
      <div>{registration.schedule}</div>
      <div>{registration.createdAt.toDate().toLocaleString()}</div>

      <div className="mt-8">
        <Button onClick={answer}>Responder</Button>
      </div>
    </div>
  );
};

export default RegistrationInfo;
