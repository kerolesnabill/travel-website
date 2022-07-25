import about from "../../assets/about.jpg";

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
          dicta? Ipsam voluptatum sunt exercitationem! Natus delectus ipsam
          atque dolores maxime. Qui, quibusdam! Possimus, vitae assumenda dolor
          doloremque aliquam pariatur repellat unde cum distinctio.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          beatae sit, ut obcaecati aut in architecto omnis exercitationem quae
          sunt tempora quam laboriosam quis numquam voluptatum, cumque
          aspernatur delectus eligendi fugit blanditiis! Provident, blanditiis
          culpa.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          ducimus provident veniam placeat cum illum natus, autem officiis
          mollitia eos quis, totam tempore labore nesciunt!
        </p>
      </div>
    </>
  );
};

export default About;
