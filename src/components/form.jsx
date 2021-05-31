import React, { useState } from "react";

const Form = ({ data }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [info, setInfo] = useState({
    email: "",
    name: "",
    surname: "",
    cellphone: "",
    agerange: "18-30",
    data: data,
  });

  const [modalState, setModalState] = useState({display: "none"})

  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleInputChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
    info[event.target.name] = event.target.value;
  };

  const submit = (e) => {
    e.preventDefault();
    let validateEmail = regEmail.test(String(info["email"]).toLowerCase());
    const incompleteData =
      info["name"] == false ||
      info["surname"] == false ||
      validateEmail == false ||
      info["cellphone"] == false ||
      info["agerange"] == false;

    if (incompleteData) {
      setErrorMessage(<p>ALGO FALLO</p>);
    } else if (!incompleteData) {
      setErrorMessage(<p></p>);
      setModalState({display: "flex"});
      console.log(info);
      setTimeout(() => {
      setModalState({display: "none"});
      }, 5000);
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    }
  };

  return (
    <div>
     <div style={modalState} className="Modal">
        <div className="Success">
          <h2 className="Success__tittle">
            Tu información fue enviada con éxito, estaremos en contacto contigo,
          </h2>
        </div>
      </div>
      <form action="">
        <h1>
          Hola, bienvenido, sabemos que quieres viajar en <br />
          {data},<br /> por favor diligencia el siguiente formulario
        </h1>
        <div className="Form">
          <div className="Item">
            <p>Nombre</p>
            <input
              className="Input"
              onChange={handleInputChange}
              name="name"
              type="text"
            />
          </div>
          <div className="Item">
            <p>Apellido</p>
            <input
              className="Input"
              onChange={handleInputChange}
              name="surname"
              type="text"
            />
          </div>
          <div className="Item">
            <p>Email</p>
            <input
              className="Input"
              onChange={handleInputChange}
              name="email"
              type="email"
            />
          </div>
          <div className="Item">
            <p>Numero</p>
            <input
              className="Input"
              onChange={handleInputChange}
              name="cellphone"
              type="number"
            />
          </div>
          <div className="Item">
            <p>Rango de edad</p>
            <select
              className="Input"
              onChange={handleInputChange}
              name="agerange"
              type="text"
            >
                <option value="18-30">18-30</option>
                <option value="30-50">30-50</option>
                <option value="50-70">50-70</option>
                <option value="70-100">70-100</option>
            </select>
          </div>
          <button onClick={submit}>Enviar</button>
          {errorMessage}
        </div>
      </form>

    </div>
  );
};

export default Form;
