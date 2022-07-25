import "./Card.css";

const Card = ({ img, title, city, country, continent, price }) => {
  return (
    <div
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
  );
};

export default Card;
