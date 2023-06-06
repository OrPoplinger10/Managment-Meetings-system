import "./Home.css";
import imageSource from "../../../Assets/images/meetings.jpg.jpeg";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h1>Management of meetings</h1>

            <img src={imageSource}/>
			
        </div>
    );
}

export default Home;
