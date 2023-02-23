import { useState } from "react";

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    const value = e.target.value;

    if (value !== "") {
      setCity(value);
      setError(false); // resetear el estado de error cuando se ingresa un valor válido
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city !== "") {
      onChangeCity(city);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="container__form">
        {error && (
          <p className="formulario__error">
            Por favor ingrese una ciudad válida
          </p>
        )}
        <form className="formulario" onSubmit={handleSubmit}>
          <input
            className="formulario__input"
            type="text"
            onChange={onChange}
            placeholder="Ingrese su ciudad"
          />

          <input type="submit" value="Buscar" className="formulario__button" />
        </form>
      </div>
    </>
  );
};

export default WeatherForm;
