<<<<<<< HEAD
import Header from "./components/Header";
import "./styles/output.css";

import Hero from "./views/Hero";
import Projects from "./views/Projects";
import Services from "./views/Services";
import Technology from "./views/Technology";
import Contact from "./views/Contact";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <div className="px-10">
                <Services />
                <Technology />
                <Projects />
                <Contact />
            </div>
        </>
    );
=======
import Services from "./views/Services";
import Hero from "./views/Hero";
import Technologies from "./views/Technologies";

import Title from "./components/Title";
import PortoCard from "./components/PortoCard";

import "./App.css";

function App() {
  const coloredStyle = {
    color: "#08FFC8",
  };

  return (
    <>
      <Hero></Hero>
      <Services></Services>
      <Technologies></Technologies>
      <section className="flex flex-col items-center px-8 pb-12">
        <Title normal="Showing Our" highlighted="Past Projects"></Title>
        <div className="gap-y-7 md:w-5/6 md:grid-cols-2 md:gap-5 grid grid-cols-1">
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
          <PortoCard></PortoCard>
        </div>
      </section>
      <section className="flex justify-center h-screen px-6">
        <div className="md:grid-cols-2 grid items-center w-5/6 h-full grid-cols-1">
          <h2 className="pt-10 text-5xl lg:text-6xl font-semibold text-center">
            Let`s Talk, <br />
            <span style={coloredStyle}>
              No Cost, <br />
            </span>{" "}
            Just Answers.
          </h2>
          <div className="flex flex-col items-center">
            <img className="w-5/6" src={"./imgs/lets-talk.png"} alt="" />
            <form action="get">
              <input
                placeholder="Enter your email here"
                className="form-card focus:outline-none px-4 py-2 scale-150"
                type="text"
              />
            </form>
            <span className="pt-5">
              {" "}
              It`s just between us, and we`re here to help!
            </span>
            <span>Or You can reach us via:</span>
            <div className="justify-evenly flex w-1/2 pt-4 text-xl align-middle">
              <i className="fa-solid fa-envelope"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
>>>>>>> 68f68031c1530ebf4cc52d2903ba6c518d7a047e
}

export default App;
