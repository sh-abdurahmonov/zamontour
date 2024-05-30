// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
