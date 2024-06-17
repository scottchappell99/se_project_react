import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
