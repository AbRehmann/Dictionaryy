import "./App.css";
import Sidebar from "./Components/Slider";
import Body from "./Components/Body";
import LocationPopup from "./Components/PopUp";

function App() {
  return (
    <div className="App">
      <div className="sidebr">
        <Sidebar />
      </div>
      <div
        id="change"
        className="w-full   lg:min-w-980  md:w-3/4 lg:w-3/4 xl:w-3/4 float-right p-5  md:p-7 relative box-border overflow-hidden"
      >
        <Body />
      </div>
      <div>
        <LocationPopup />
      </div>
    </div>
  );
}

export default App;
