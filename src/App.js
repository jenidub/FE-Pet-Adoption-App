import { render } from "react-dom";
import SearchParams from "../SearchParams";
//import Pet from "./Pet";
const App = () => {
  return (
    <div>
      <h1>Adopt Me Pet Company</h1>
      <SearchParams />
      {/* <Pet
        name="Lucky"
        animal="Favorite Dog"
        breed="Black Lab Special Edition"
      />
      <Pet
        name="Dusty"
        animal="Another Dog"
        breed="German Shepherd Plus Edition"
      />
      <Pet name="Eliot" animal="Secret Cat" breed="Garfield in Real Life" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
