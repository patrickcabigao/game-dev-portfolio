import Navbar from "../components/Navbar";
import twistedSpindustryVideo from "../assets/twisted-spindustry-showcase.webm";

const Home = (): React.ReactNode => {
    return (
        <div className="homepage">
            <Navbar/>

            <video src={twistedSpindustryVideo} autoPlay muted loop disablePictureInPicture/>
            
            <div className="homepage-content">
                <div>
                    <h1>Welcome to Patrick Cabigao's <br/>Game Development Portfolio!</h1>
                    <a href="/games">Come see my games! -&gt;</a>
                </div>
            </div>
        </div>
    );
}
export default Home;