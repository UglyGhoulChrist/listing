import "./App.css";
import Listing from "./components/Listing";
import offerList from "./data/data.js";

function App() {
  return (
    <div className="App">
      <Listing offerList={offerList} />
    </div>
  );
}

export default App;
