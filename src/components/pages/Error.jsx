import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="text-danger">Error 404</h1>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
};

export default Error;
