import "./Css/App.css";
import Topbar from "./Components/Topbar";
import Options from "./Components/Options";
import Preview from "./Components/Preview";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="coneiner">
        <Options/>
        <Preview/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;