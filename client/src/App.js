import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
