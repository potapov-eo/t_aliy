import "./App.css";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import Examples from "./Examples/Examples";
import Footer from "./Footer/Footer";

function App () {
    return (
        <div className="App">
            <Header/>
            <AboutUs/>
            <Examples/>
            <Footer/>
        </div>
    );
}

export default App;
