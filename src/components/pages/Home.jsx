import { Link } from "react-router-dom";
import homeImage from "../../assets/home.jpg";

const Home = () => {
  return (
    <>
      <div className="position-relative text-center text-white mt-5">
        <img
          className="w-100"
          style={{ height: "auto" }}
          src={homeImage}
          alt=""
        />
        <h1 className="heading text-uppercase position-absolute top-50 start-50 translate-middle fw-bold text-light">
          Explore the world <br /> with K-Travel
        </h1>
      </div>
      <div className="container pt-5">
        <div className="row my-5 py-5 feature">
          <div
            className="col col-lg-6 pt-lg-5 mt-lg-2 fs-5 ps-5 feature__content"
            data-aos="fade-right"
          >
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
            className="col col-lg-6 mt-5"
            style={{ borderRadius: "10%" }}
            data-aos="fade-left"
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          ></img>
        </div>
        <div className="row my-5 py-5 feature">
          <div
            className="col col-lg-6 pt-lg-5 mt-lg-2 fs-5 ps-5 feature__content"
            data-aos="fade-left"
          >
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
          <img
            className="col col-lg-6 mt-5"
            style={{ borderRadius: "10%" }}
            data-aos="fade-right"
            src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          ></img>
        </div>
        <div className="row my-5 py-5 feature">
          <div
            className="col col-lg-6 pt-lg-5 mt-lg-2 fs-5 ps-5 feature__content"
            data-aos="fade-right"
          >
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
            className="col col-lg-6 mt-5"
            style={{ borderRadius: "10%" }}
            data-aos="fade-left"
            src="https://images.unsplash.com/photo-1634137622977-34ef2eda193f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
