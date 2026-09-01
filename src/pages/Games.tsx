import Page from "./Page";
import tardigradeGameVideo from "../assets/tardigrade-game-preview.mp4";

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

        <h1>My proudest game jam games!</h1>
        <ul className="jam-games">
            <li>
                <p>
                    Made solo for the UCSB Game Development Club's Winter 2026 Jam's theme, "Spin to Win".
                    Play as a sign spinner taking down the rival pizza store!
                </p>
                <iframe height="167" src="https://itch.io/embed/4205828?dark=true" width="552">
                    <a href="https://eleven-scute-turtle.itch.io/twisted-spindustry">Twisted Spindustry by eleven_scute_turtle</a>
                </iframe>
            </li>
            
            <li>
                <p>
                    Made solo for the UCSB Game Development Club's Fall 2026 Jam's theme, "Duality".
                    When the lights are off, sneak through the building, silencing enemies along the way.
                    When the lights turn on, fight for your life as everyone becomes aware of your presence.
                </p>
                <iframe src="https://itch.io/embed/3953393?dark=true" width="552" height="167">
                    <a href="https://eleven-scute-turtle.itch.io/darkspark">Dark/Spark by eleven_scute_turtle</a>
                </iframe>
            </li>

            <li>
                <p>
                    Made in a team for the GMTK Game Jam 2024's theme, "Built to Scale".
                    Play as Robster the Lobster, an ever-growing lobster unleashing its anger on the restaurant
                    which has feasted on his friends and family for years.
                </p>
                <iframe width="552" height="167" src="https://itch.io/embed/2909169?dark=true">
                    <a href="https://gorbooo.itch.io/robster-the-lobster">Robster The Lobster by Gorbooo, eleven_scute_turtle</a>
                </iframe>
            </li>
        </ul>
    </Page>

    );
}
export default Games;