import { useState } from "react";
import "./Card.css";
import Modal from "./Modal";

const Card = ({ img, title, city, country, continent, price }) => {
  const [openCard, setOpenCard] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const openCardHandler = () => {
    setOpenCard(!openCard);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const cardOpened = (
    <Modal onClose={openCardHandler}>
      <div className="card-opened-container row">
        <div className="col-6">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-6 pt-4 d-grid">
          <h4>{title}</h4>
          <h6>
            {city}, {country}, {continent}
          </h6>
          <h5 className="text-warning">${price}</h5>
        </div>
        <form onSubmit={submitHandler} className="p-4 px-5 d-grid gap-3">
          <input
            className="border-1 rounded p-2"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="border-1 rounded p-2"
            type="number"
            placeholder="Your Phone Number"
            required
          />
          <button
            type="submit"
            className={
              isBooked ? "d-none" : "btn btn-outline-primary w-25 m-auto"
            }
          >
            Book
          </button>
          {isBooked ? (
            <p className="registered-p m-auto text-success">
              Registered, we will contact you.
            </p>
          ) : (
            false
          )}
        </form>
      </div>
    </Modal>
  );

  return (
    <>
      {openCard ? cardOpened : false}
      <div
        onClick={openCardHandler}
        className="card text-dark bg-light card-hover"
        style={{ width: "100%", cursor: "pointer" }}
      >
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text ps-2 pt-1 mb-0 fst-italic">
            {city}, {country}
          </p>
          <p className="col text-warning fs-4 text-end fst-normal pe-4 mb-0 fst-italic">
            ${price}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
