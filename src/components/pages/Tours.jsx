import { useState } from "react";
import Card from "../UI/Card";
import DummyPlaces from "../../servers/DummyPlaces";
import tours from "../../assets/tours.jpg";
import ReactPaginate from "react-paginate";

const Tours = () => {
  const [places, setPlaces] = useState(DummyPlaces);
  const [pageNumber, setPageNumber] = useState(0);

  const placesPerPage = 8;
  const pagesVisited = pageNumber * placesPerPage;

  const cradColumnClass = "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4";

  const displayPlaces = places
    .slice(pagesVisited, pagesVisited + placesPerPage)
    .map((place) => {
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
    });

  const pageCount = Math.ceil(places.length / placesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const filterPlaces = (continent) => {
    setPageNumber(0);
    const updatePlaces = DummyPlaces.filter((current) => {
      return current.continent === continent;
    });
    setPlaces(updatePlaces);
  };

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

        <div className="row">{displayPlaces}</div>

        <ReactPaginate
          previousLabel="&laquo;"
          nextLabel="&raquo;"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="pagination justify-content-center"
          pageLinkClassName="page-item page-link"
          previousLinkClassName="page-item page-link"
          nextLinkClassName="page-item page-link"
          disabledClassName="page-item disabled"
          activeClassName="page-item active "
        />
      </div>
    </>
  );
};

export default Tours;
