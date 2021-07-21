// import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} />
    </Router>
  );
}

export default App;
