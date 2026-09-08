import Page from "../components/Page";
import GameCard from "../components/GameCard";
import tardigradeGameVideo from "../assets/tardigrade-game-preview.mp4";
import twistedSpindustryThumbnail from "../assets/twisted-spindustry-thumbnail.png";
import darkSparkThumbnail from "../assets/dark-spark-thumbnail.png";
import robsterTheLobsterThumbnail from "../assets/robster-the-lobster-thumbnail.png";

const Games = (): React.ReactNode => {
    return (
    <Page>
        <h1>What I'm currently working on...</h1>
        <p>
            I've recently started a long-term project which I've been excited to work on for the past few weeks! 
            It's an action platformer where you play as a <a href="https://en.wikipedia.org/wiki/Tardigrade">tardigrade</a>, 
            fighting enemies underwater in all sorts of extreme environments with fun abilities. Here's what I have so far:
        </p>
        <br/>
        <div className="center">
            <video width="640" height="360" controls>
                <source src={tardigradeGameVideo}/>
            </video>
        </div>
        <br/>
        <p>
            I plan to have a demo out with four levels by the end of September 2026, and when it's ready I hope you'll enjoy it!
        </p>

        <div className="jam-games-heading">
            <h1>My proudest game jam games!</h1>
            <p>(click on a thumbnail to go to its game page)</p>
        </div>

        <ul className="jam-games">
            <li>
                <GameCard gameLink="games/twisted-spindustry" title="Twisted Spindustry" thumbnailSource={twistedSpindustryThumbnail}>
                    Made solo for the UCSB Game Development Club's Winter 2026 Jam's theme, "Spin to Win".
                    Play as a sign spinner taking down the rival pizza store!
                </GameCard>
            </li>

            <li>
                <GameCard gameLink="games/dark-spark" title="Dark/Spark" thumbnailSource={darkSparkThumbnail}>
                    Made solo for the UCSB Game Development Club's Fall 2026 Jam's theme, "Duality".
                    When the lights are off, sneak through the building, silencing enemies along the way.
                    When the lights turn on, fight for your life as everyone becomes aware of your presence.
                </GameCard>
            </li>
            <li>
                <GameCard gameLink="games/robster-the-lobster" title="Robster the Lobster" thumbnailSource={robsterTheLobsterThumbnail}>
                    Made in a team for the GMTK Game Jam 2024's theme, "Built to Scale".
                    Play as Robster the Lobster, an ever-growing lobster unleashing its anger on the restaurant
                    which has feasted on his friends and family for years.
                </GameCard>
            </li>
        </ul>
    </Page>

    );
}
export default Games;