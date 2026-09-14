import Page from "../components/Page";

const DarkSpark = (): React.ReactNode => {
    return (
        <Page>
            <h1>Dark/Spark</h1>

            <div className="game-page-layout">
                <iframe className="game-embed" src="https://itch.io/embed-upload/15220025?color=031e2a" allowFullScreen width="480" height="290"><a href="https://eleven-scute-turtle.itch.io/darkspark">Play Dark/Spark on itch.io</a></iframe>

                <p>
                    When it's dark, sneak around and discreetly take out your enemies. When the lights come on, rush to survive as all of the enemies target you all at once.
                    <br/><br/>
                    Made in 24 hours for the UCSB Game Development Club's Fall 2025 Jam, based on the theme "Duality".
                    <br/><br/>

                    Controls:
                    <ul>
                        <li>WASD - Move</li>
                        <li>LMB - Shoot</li>
                        <li>Space - Dash</li>
                        <li>RMB Hold/Release - Aim/Fire Laser</li>
                    </ul>
                    <br/>
                    Tools:
                    <ul>
                        <li>Godot - Programming, game development</li>
                        <li>Aseprite - Art, animation</li>
                        <li>Jsfxr - Sound effect creation</li>
                    </ul>
                </p>

                <div>
                    <h2>Check out the itch.io page!</h2>
                    <iframe className="itch-embed" src="https://itch.io/embed/3953393?dark=true" width="552" height="167">
                        <a href="https://eleven-scute-turtle.itch.io/darkspark">Dark/Spark by eleven_scute_turtle</a>
                    </iframe>
                </div>
            </div>
            
        </Page>
    );
}
export default DarkSpark