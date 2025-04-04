import Hero from "./componants/Hero";
import Highlights from "./componants/Highlights";
import Navbar from "./componants/Navbar";
import Model from "./componants/Model"

function App() {
  return (
    <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Model/>
       </main>
  );
}

export default App;
