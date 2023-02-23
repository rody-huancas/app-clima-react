import React from "react";

const WeatherMainInfo = ({ weather }) => {
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__header">
            <div className="main__city">{weather?.location.name}</div>
            <div className="main__country">{weather?.location.country}</div>
          </div>
          <div className="main__section">
            <img
              className="main__img"
              src={`http:${weather?.current.condition.icon}`}
              width="128"
              alt={weather?.current.condition.text}
            />
            <span className="main__temp">{weather?.current.temp_c}°</span>
          </div>
        </div>
        <iframe
          className="main__maps"
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31792.247454965836!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1677109407764!5m2!1ses-419!2spe`}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </>
  );
};

export default WeatherMainInfo;
