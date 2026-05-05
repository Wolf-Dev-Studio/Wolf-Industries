import Hero from "../Component/Home/Hero";
import Navbar from "../Component/Home/Navbar";
import Bienvenida from "../Component/Home/Bienvenida";
import Footer from "../Component/Home/Footer";
import WolfBentoSideBySide from "../Component/Home/bentogrid";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Bienvenida />
            <Hero />
            <WolfBentoSideBySide />
            <Footer />
        </div>
    );
};

export default Home;