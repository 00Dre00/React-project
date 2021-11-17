import React from "react";
export default function Weather() {
  let weatherData = {
    city: "Amsterdam",
    date: "Saturday, 20:20",
    temperature: "10",
    description: "Few Clouds",
    humidity: "90",
    wind: "1",
    imgUrl: "http://openweathermap.org/img/wn/02n@2x.png"
  };

  return (
    <div className="container">
      <h1> {weatherData.city}</h1>
      <span className="date">{weatherData.date}</span>

      <div className="row today">
        <div className="col-sm">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
        </div>

        <div className="col-sm">
          <span className="temperature">{weatherData.temperature}</span>
          <span className="units">&#8451;</span>
          <p>{weatherData.description}</p>
        </div>

        <div className="col-sm">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>

      <div className="Weather">
        <form className="search-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search for city"
              className="form-control"
              aria-label="location with one button add on"
              autocomplete="off"
              autofocus="on"
            />

            <button
              className="btn button-outline-secondary"
              type="button"
            ></button>
            <button className="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </div>
        </form>

        <small className="contact">
          <a
            href="https://github.com/00Dre00/react-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>
          By Andrea Hitchin
        </small>
      </div>
    </div>
  );
}
