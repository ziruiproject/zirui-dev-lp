import heroImage from "./assets/hero.png";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className="h-screen bg-cover bg-center bg-no-repeat"
      >
        <h1 className="font-serif font-semibold text-center text-4xl text-white">
          Transforming Your Digital Dreams Into Reality
        </h1>
      </div>
    </>
  );
}

export default App;
