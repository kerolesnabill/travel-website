import { useState } from "react";
import Card from "../UI/Card";
import DummyPlaces from "../../servers/DummyPlaces";
import tours from "../../assets/tours.jpg";

const Tours = () => {
  const [places, setPlaces] = useState(DummyPlaces);

  const filterPlaces = (continent) => {
    const updatePlaces = DummyPlaces.filter((current) => {
      return current.continent === continent;
    });
    setPlaces(updatePlaces);
  };

  const cradColumnClass = "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4";

  return (
    <>
      <div className="mb-5">
        <img style={{ width: "100%", height: "auto" }} src={tours} />
      </div>
      <div className="container">
        <h1 className="text-center fst-italic text-primary mb-5">
          Explore the world and have fun
        </h1>
        <div className="d-flex justify-content-around mb-5">
          <button
            className="btn btn-info"
            onClick={() => {
              setPlaces(DummyPlaces);
            }}
          >
            All
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              filterPlaces("Asia");
            }}
          >
            Asia
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              filterPlaces("Africa");
            }}
          >
            Africa
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              filterPlaces("Europe");
            }}
          >
            Europe
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              filterPlaces("North America");
            }}
          >
            North America
          </button>
        </div>

        <div className="row">
          {places.map((place) => {
            const { id, img, title, city, country, continent, price } = place;
            return (
              <div key={id} className={cradColumnClass}>
                <Card
                  img={img}
                  title={title}
                  city={city}
                  country={country}
                  continent={continent}
                  price={price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;
