import {Route, Routes} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Store from "./Store";
import Menu from "./components/Menu";
import ShoppingCartProvider from "./context/CartItemsContext";
function App() {
  return (
    <ShoppingCartProvider>
      <div className="App" style={{backgroundColor: "#eee", minHeight: "100vh"}}>
        <NavBar />
        <Menu />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
