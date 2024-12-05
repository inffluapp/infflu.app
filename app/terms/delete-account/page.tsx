'use client';

import type { Metadata } from "next";
import Header from "../components/Header";

export default function DeleteAccount() {

  function sendEmail(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    var subject = "Solicitud de eliminación de cuenta";
    var message = `Instagram: ${formJson.instagram}. \n Número de teléfono: ${formJson.number}.`;
    var email = "hola@infflu.app";
    var href = "mailto:" + email + "?subject=" + subject + "&body=" + message;
    window.open(href)
  }

  return (
    <>
      <Header title="Borrar cuenta" hideDate/>

      <div className="flex-1 w-full px-8 py-4">
        <div className="w-full md:w-1/2  max-w-full mx-auto">

          <p className="text-tertiary mb-4 text-center">¿Estás seguro(a) de que deseas borrar tu cuenta?</p>

          <p className="text-md text-tertiary mb-4">Al eliminar tu cuenta:</p>
          <p className="text-md mb-4">1. Perderás tus datos de acceso y no podrás volver a iniciar sesión.</p>
          <p className="text-md mb-4">2. Se eliminará toda tu información en la app, incluyendo:</p>

         <ul className="list-disc pl-6 mb-4">
            <li>Métodos de pago guardados.</li>
            <li>Cuentas vinculadas.</li>
            <li>Otros datos relevantes asociados a tu perfil</li>
            <li>Todos los registros de tu cuenta serán eliminados permanentemente de nuestra base de datos, en conformidad con nuestro Aviso de Privacidad.</li>
          </ul>

          <p className="text-md text-tertiary mb-4">Esta acción es irreversible y no podrás recuperar tu cuenta ni la información asociada.</p>

          <p className="text-sm mb-10 text-center text-grey">Si después de leer lo anterior estás segura(o) de eliminar tu cuenta, proporciónanos los siguientes datos para que un miembro de nuestro equipo se contácte contigo para realizar la elminiación</p>

          <form onSubmit={sendEmail}>
            <div className="flex gap-4 mb-4">
              <div className="">
                <label htmlFor="instagram" className="text-grey">Usuario de Instagram</label>
                <input className=" border rounded-lg py-1 px-2" placeholder="@inffluapp" name="instagram" id="instagram"/>
              </div>
              <div className="">
                <label htmlFor="number" className="text-grey">Número de telefóno</label>
                <input className=" border rounded-lg py-1 px-2" placeholder="+52 9999999999" name="number" id="number"/>
              </div>
            </div>

            <div className="flex items-center justify-center  mb-4">
              <input type="hidden" className="mr-2" name="delete" value="0" />
              <label>
                <input type="checkbox" className="mr-2" name="delete" id="delete" value="1" />
                <span className="text-grey">Estoy segura(o) de borrar mi cuenta</span>
              </label>
            </div>

            <button type="submit" style={{backgroundColor : '#FF2222'}} className="w-full rounded-full py-2 text-white">
              Solicitar borrar mi cuenta
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
