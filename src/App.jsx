import heroImage from "./assets/hero.png";
import "./styles/App.css";

import { FiExternalLink } from "react-icons/fi";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import { list } from "./contents/Project";

// pengaturan font size mungkin kalau mau disesuaikan
export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Jumbotron />
      <About />
      <Tech />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

function Jumbotron() {
  return (
    <section
      style={{ backgroundImage: `url(${heroImage})` }}
      className="h-screen bg-cover text-center flex justify-center"
    >
      <div className="mx-3 text-whiteCustom w-full sm:w-[75%] md:w-[80%] xl:w-[50%] h-screen flex flex-col items-center justify-center text-center">
        <h1 className="title">
          <span className="text-greenCustom">Transforming </span>
          your digital dreams into{" "}
          <span className="text-greenCustom">Reality</span>
        </h1>
        <p className="title-description mt-5">
          From initial design concepts to final deployment, we`ll partner with
          you every step of the way to transform your digital dreams into
          reality.
        </p>

        <div className="w-[200px] md:w-full my-5 flex flex-col items-center justify-center md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-5">
          <a
            href=""
            className="border border-greenCustom rounded-md py-2 px-4 w-full md:w-auto text-lg"
          >
            Make it Happen
          </a>
          <a
            href=""
            className="bg-gray-500 border border-gray-400 rounded-md py-2 px-4 w-full md:w-auto text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="flex flex-col items-center justify-center h-screen space-y-3">
      <h1 className="text-greenCustom title text-center">About Us</h1>
      <div className="mt-3 text-xl md:text-2xl text-justify mx-auto w-[80%] lg:w-[60%] xl:w-[50%] space-y-3 md:space-y-0 flex flex-col md:flex-row md:space-x-5">
        <p className="indent-5 md:indent-0 md:text-right">
          Looking for a partner to help bring your digital dreams to life? Look
          no further than Zirui Dev!
        </p>
        <p className="indent-5 md:indent-0">
          In Zirui Dev, we specialize in building custom fullstack web
          applications that are as unique as you are.
        </p>
      </div>
    </section>
  );
}

function Tech() {
  // logo tech yang digunakan belum fix
  let tech = [
    {
      name: "Laravel",
      desc: "Build customized web applications, such as booking systems, online tools, or membership sites,",
    },
    {
      name: "SVELTE KIT",
      desc: "SvelteKit is a next-generation web framework that offers faster load times and simpler development.  ",
    },
    {
      name: "PostgreSQL",
      desc: "Powerful open-source relational database management system used for data storage and retrieval.",
    },
    {
      name: "tailwindcss",
      desc: "CSS utility framework that helps to rapidly build custom and responsive user interfaces.",
    },
    {
      name: "SVELTE",
      desc: "Used for building fast, lightweight, and easy-to-maintain web applications.",
    },
    {
      name: "Linux",
      desc: "Linux server is powerful, secure, and customizable, making it a popular choice for web hosting.",
    },
  ];

  return (
    <section className="text-whiteCustom mx-5 lg:w-[80%] lg:mx-auto my-20">
      <div className="md:mx-10 lg:mx-5 flex flex-col md:flex-row items-center justify-between text-center">
        <h1 className="title md:text-left lg:w-[40%]">
          <span className="text-greenCustom">Technology</span> Stack
        </h1>
        <h3 className="title-description my-3 md:text-3xl md:text-right md:w-[50%] lg:w-[40%] xl:text-5xl">
          Driving{" "}
          <span className="text-greenCustom">digital transformation</span> with
          innovative tech solutions.
        </h3>
      </div>

      <div className="mt-5 md:mt-10 gap-5 grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 space-y-5 md:space-y-0">
        {tech.map((data, i) => {
          return (
            <div className="text-center w-[80%]" key={i}>
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <p className="text-xl font-thin text-whiteCustom/80">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Project() {
  return (
    <section className="text-whiteCustom mx-5 lg:w-[75%] lg:mx-auto my-80  flex flex-col items-center justify-center">
      <div className="md:mx-10 lg:mx-5 flex flex-col md:flex-row-reverse items-center justify-between text-center">
        <h1 className="title md:text-right lg:w-[30%]">
          Work <span className="text-greenCustom">Showcase</span>
        </h1>
        <h3 className="title-description my-3 md:text-3xl md:text-left md:w-[50%] lg:w-[40%] xl:text-4xl">
          Our portofolio: where{" "}
          <span className="text-greenCustom">creativity</span> meets{" "}
          <span className="text-greenCustom">functionality</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-10">
        {list.map((data, i) => {
          return (
            <div
              key={i}
              className="text-white w-full md:w-[426px] bg-[#202020] px-4 py-6 rounded-md border border-white/10"
            >
              <div className="flex justify-between items-center mx-4">
                <p className="font-semibold text-xl">{data.name}</p>

                {/* size 320px g tau diapain */}
                <div className="flex items-center justify-center space-x-3">
                  <p className="font-thin text-lg">TAKE A LOOK</p>
                  <a href="/">
                    <FiExternalLink
                      className="text-whiteCustom cursor-pointer text-2xl"
                      key={i}
                    />
                  </a>
                </div>
              </div>

              <img
                src={`./public/${data.image}.png`}
                alt={data.image}
                className="my-4"
              />

              <div className="mx-4">
                <h3 className="mt-14 text-whiteCustom text-xl">Made With</h3>
                <h2 className="mt-3 font-bold text-2xl">
                  {data.project.join(" ")}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="text-center">
      <h1 className="text-6xl mx-4">Why taking so long ?</h1>
      <h1 className="text-5xl lg:text-7xl my-5 mx-4">
        Call us <span className="text-greenCustom">now</span> !
      </h1>
      <div className=" mx-auto w-[300px] md:w-full my-20 flex flex-col items-center justify-center md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5">
        <a
          href=""
          className="bg-gray-500 border border-gray-400 rounded-md py-2 px-5 w-full md:w-auto text-lg"
        >
          Contact
        </a>
        <a
          href=""
          className="border border-greenCustom rounded-md py-2 px-4 w-full md:w-auto text-lg"
        >
          Send us email
        </a>
      </div>
    </section>
  );
}
