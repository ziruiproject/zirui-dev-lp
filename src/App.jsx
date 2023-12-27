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
}

export default App;
