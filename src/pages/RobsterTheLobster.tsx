import Page from "../components/Page";

const RobsterTheLobster = (): React.ReactNode => {
    return (
        <Page>
            <h1>Robster the Lobster</h1>
            <div className="game-page-layout">
                <iframe className="game-embed" src="https://itch.io/embed-upload/11259442?color=ff3535" allowFullScreen width="640" height="380"><a href="https://gorbooo.itch.io/robster-the-lobster">Play Robster The Lobster on itch.io</a></iframe>

                <p>
                    Robster is due to meet his lobstery fate. Sitting in the darkness of the pot and the broth surrounding him, 
                    he stews in his anger over the sweltering anguish he and his crustacean comrades are soon to undergo. 
                    His anger swells until in a fit of anger he outgrows his pot, searching for his own freedom from the culinary 
                    captors who locked him in such a contraption. He must grow powerful enough through each molt to regain his 
                    lobster life once more and to escape the halls of the restaurant that holds him. Will he reestablish his 
                    invertebrate independence?
                    <br/><br/>
                    Gain more energy by eating food! Once you have enough energy to molt, you'll be able to grow in size and
                    gain the ability to eat even more food. Be careful of the chefs' flamethrowers, and escape by getting
                    big enough to eat the garage door!
                    <br/><br/>
                    Made in 96 hours for the GMTK Game Jam 2024, following the theme "Built to Scale".
                    <br/><br/>
                    Developers:
                    <ul>
                        <li>eleven_scute_turtle (Developer)</li>
                        <li>Gorbooo (Developer)</li>
                        <li>RK (Cover Artist)</li>
                        <li>A. Nora (Creative Support)</li>
                    </ul>
                    <br/>
                    Controls:
                    <ul>
                        <li>WASD - Move</li>
                        <li>J/K/Space - Eat</li>
                        <li>P/Escape - Pause</li>
                    </ul>
                    <br/>
                    Tools:
                    <ul>
                        <li>Godot - Programming, game development</li>
                        <li>Aseprite - Art, animation</li>
                        <li>Bosca Ceoil - Music composition</li>
                    </ul>
                </p>

                <div>
                    <h2>Check out the itch.io page!</h2>
                    <iframe className="itch-embed" width="552" height="167" src="https://itch.io/embed/2909169?dark=true">
                        <a href="https://gorbooo.itch.io/robster-the-lobster">Robster The Lobster by Gorbooo, eleven_scute_turtle</a>
                    </iframe>
                </div>
            </div>
        </Page>
    );
}
export default RobsterTheLobster