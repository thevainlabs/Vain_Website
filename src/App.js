import react from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@700&display=swap');
</style>;

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
