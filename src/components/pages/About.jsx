import about from "../../assets/about.jpg";
import tech1 from "../../assets/tech-1.svg";
import tech2 from "../../assets/tech-2.svg";
import tech3 from "../../assets/tech-3.svg";
import tech4 from "../../assets/tech-4.svg";

const About = () => {
  return (
    <>
      <div>
        <img
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100vh",
          }}
          src={about}
          alt="About us background"
        />
      </div>
      <div className="container fs-4 mt-5 mb-5">
        <h1 className="text-center mt-5 mb-5 text-primary">About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          dolorem quidem iure vitae, accusamus ut incidunt a neque, odio,
          tempora ad dolor. Eos illum molestiae reprehenderit eius quam. Fugit
          animi vel odit praesentium maiores ex doloremque quo adipisci tempora
          iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis
          alias doloribus dignissimos non veniam tempore nihil, consequuntur
          blanditiis perferendis et ratione enim ullam deleniti accusantium
          dicta? Ipsam voluptatum sunt exercitationem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          ducimus provident veniam placeat cum illum natus, autem officiis
          mollitia eos quis, totam tempore labore nesciunt!
        </p>
      </div>
      <div className="tech-container mx-auto">
        <div className="container row my-5 mx-auto">
          <img
            className="col-12 col-md-6 col-lg-4 col-xl-2 p-5 tech-img"
            src={tech1}
            alt=""
          />
          <img
            className="col-12 col-md-6 col-lg-4 col-xl-2 p-5 tech-img"
            src={tech2}
            alt=""
          />
          <img
            className="col-12 col-md-6 col-lg-4 col-xl-2 p-5 tech-img"
            src={tech3}
            alt=""
          />
          <img
            className="col-12 col-md-6 col-lg-4 col-xl-2 p-5 tech-img"
            src={tech4}
            alt=""
          />
          <img
            className="col-12 col-md-6 col-lg-4 col-xl-2 p-5 tech-img"
            src={tech1}
            alt=""
          />
          <img
            className="col-12 col-md-6 col-lg-4 col-xl-2 p-5 tech-img"
            src={tech2}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
