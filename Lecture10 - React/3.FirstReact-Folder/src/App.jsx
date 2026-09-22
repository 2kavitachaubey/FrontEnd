import About from "./components/About";
import Facts from "./components/Facts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="h-full w-full font-['Segoe UI', sans-serif]">
      <Navbar />
      <Hero />
      <About />
      <Facts />
    </div>
  );
};
export default App;
