import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

const WheatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  const loadInfo = async (city = "lima") => {
    const url = "http://api.weatherapi.com/v1/current.json?aqi=no";
    const key = "1ed07b124b61448d910222227232202";
    try {
      const request = await fetch(`${url}&key=${key}&q=${city}`);
      const json = await request.json();
      if (request.status === 200) {
        setWeather(json);
        setError(null);
      } else {
        setError(json.error.message);
      }
    } catch (error) {
      console.log(error);
      setError("Error al obtener el clima");
    }
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    setError(null);
    loadInfo(city);
  };

  return (
    <>
      <div className="container">
        <h1 className="container__title">
          Weather -{" "}
          <span className="container__subtitle">Buscador de Clima</span>
        </h1>
        <WeatherForm onChangeCity={handleChangeCity} />
        {error ? (
          <p className="error__api">Ciudad no válida</p>
        ) : (
          <WeatherMainInfo weather={weather} />
        )}
      </div>
    </>
  );
};

export default WheatherApp;
