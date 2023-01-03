import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Contact from "./components/contact";
import Work from "./components/work";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
