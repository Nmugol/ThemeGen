import "./Css/App.css";
import Topbar from "./Components/Topbar";
import Options from "./Components/Opitons";
import Preview from "./Components/Preview";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div className="coneiner">
        <Topbar/>
        <Options/>
        <Preview/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
