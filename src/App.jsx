import Hero from "./Hero";
import Santa from "./Santa";
import santas from "./data/santas.js";

function App() {
  return (
    <div className="py-4 px-7 max-w-md mx-auto sm:max-w-xl lg:max-w-4xl space-y-32">
      <Hero />
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {santas.map((santa) => (
            <Santa santa={santa} key={santa.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
