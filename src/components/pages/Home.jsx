import { Link } from "react-router-dom";
import homeImage from "../../assets/home.jpg";

const Home = () => {
  return (
    <>
      <div className="position-relative text-center text-white">
        <img
          className="w-100"
          style={{ height: "auto" }}
          src={homeImage}
          alt=""
        />
        <h1
          className="position-absolute top-50 start-50 translate-middle fw-bold"
          style={{ fontSize: "5rem" }}
        >
          Explor The World <br /> With K-Travel
        </h1>
      </div>
      <div className="container pt-5">
        <div className="row mt-5 mb-5 pt-5 pb-5">
          <div className="col col-md-6 mt-5 fs-5">
            <h3 className="fs-2 mb-4">Explore The World</h3>
            <p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nihil perspiciatis quasi facere veniam molestiae
                praesentium quidem officiis quas magni.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nihil perspiciatis quasi facere veniam molestiae
                praesentium quidem officiis quas magni.
              </p>
            </p>
          </div>
          <img
            className="col col-md-6"
            style={{ borderRadius: "10%" }}
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
        </div>
        <div className="row mt-5 mb-5  pt-5 pb-5">
          <img
            className="col col-md-6"
            style={{ borderRadius: "10%" }}
            src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          ></img>
          <div className="col col-md-6 mt-5 fs-5 ps-5">
            <h3 className="fs-2 mb-4">Connect with other travelers</h3>
            <p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nihil perspiciatis quasi facere veniam molestiae
                praesentium quidem officiis quas magni.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nihil perspiciatis quasi facere veniam molestiae
                praesentium quidem officiis quas magni.
              </p>
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-5  pt-5 pb-5">
          <div className="col col-md-6 mt-5 fs-5">
            <h3 className="fs-2 mb-4">Discover other cultures</h3>
            <p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nihil perspiciatis quasi facere veniam molestiae
                praesentium quidem officiis quas magni.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nihil perspiciatis quasi facere veniam molestiae
                praesentium quidem officiis quas magni.
              </p>
            </p>
          </div>
          <img
            className="col col-md-6"
            style={{ borderRadius: "10%" }}
            src="https://images.unsplash.com/photo-1634137622977-34ef2eda193f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
