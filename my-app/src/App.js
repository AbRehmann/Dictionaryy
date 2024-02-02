import "./App.css";
import Sidebar from "./Components/Slider";
import Body from "./Components/Body";

function App() {
  return (
    <div className="App">
      <div className="sidebr">
        <Sidebar />
      </div>
      <div
        id="change"
        className="w-full  lg:min-w-980  md:w-3/4 lg:w-3/4 xl:w-3/4 float-right p-20 md:p-20 relative box-border overflow-hidden"
      >
        <Body />
      </div>
    </div>
  );
}

export default App;
