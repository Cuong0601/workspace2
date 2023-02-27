import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from './Layout/DefaultLayout'
import Container from "./Components/Container";
import Hero from "./pages/Hero"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route path="" element={<Container/>}></Route>
            <Route path="hero" element={<Hero/>}></Route>
          </Route>
        </Routes>
      </Router>
      {/* <Header />
      <Container />
      <Footer /> */}
    </div>
  );
}

export default App;
