import React, {useState} from "react";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 
const Form = () => {
  const [datosUsuario, setdatosUsuario] = useState({
    nombreCompleto: "",
    email: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(datosUsuario.email, datosUsuario.nombreCompleto);
    if (
      datosUsuario.nombreCompleto.length > 5 &&
      emailRegex.test(datosUsuario.email)
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
      setMostrar(false);
    }
  };
 

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Nombre Completo:</label>
            <input
              type="text"
              value={datosUsuario.nombreCompleto}
              onChange={(event) =>
                setdatosUsuario({ ...datosUsuario, nombreCompleto: event.target.value })
              }
            />
            <label>Email: </label>
            <input
              type= "email"
              value={datosUsuario.email}
              onChange={(event) =>
                setdatosUsuario({ ...datosUsuario, email: event.target.value })
              }/>
            <button>ENVIAR</button>  
            {mostrar && (
            <h4>Gracias {datosUsuario.nombreCompleto}, te contactaremos cuanto antes vía mail</h4>)}
            {error && (
              <h4>Por favor verifique su información nuevamente</h4>)}
      </form>
    </div>
  );
};

export default Form;
