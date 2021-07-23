// import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomeScreen} />
      <Footer />
    </Router>
  );
}

export default App;
