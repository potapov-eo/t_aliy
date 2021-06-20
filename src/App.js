import style from "./App.module.css";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import Examples from "./Examples/Examples";
import Footer from "./Footer/Footer";

function App () {
    return (
        <div className={style.App}>
            <Header/>
            <AboutUs/>
            <Examples/>
            <Footer/>
        </div>
    );
}
export default App;
