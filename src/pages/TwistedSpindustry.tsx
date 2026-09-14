import Page from "../components/Page";

const TwistedSpindustry = (): React.ReactNode => {
    return (
        <Page>
            <h1>Twisted Spindustry</h1>

            <div className="game-page-layout">
                <iframe className="game-embed" src="https://itch.io/embed-upload/16167620?color=3d382c" width="640" allowFullScreen height="380"><a href="https://eleven-scute-turtle.itch.io/twisted-spindustry">Play Twisted Spindustry on itch.io</a></iframe>
                
                <p>
                    The pizza company you work for sent you to take down their rival. Even though you're only a sign spinner, there's no one better fit for the job.
                    <br/><br/>
                    Made in 24 hours for the UCSB Game Development Club's Winter 2026 Jam, following the theme "Spin to Win".
                    <br/><br/>
                    Controls:
                    <ul>
                        <li>A/D - Left/Right</li>
                        <li>Space - Jump</li>
                        <li>Mouse - Move sign</li>
                        <li>LMB/RMB - Rotate sign CCW/CW</li>
                    </ul>
                    <br/>
                    Tools:
                    <ul>
                        <li>Godot - Programming, game development</li>
                        <li>Aseprite - Art, animation</li>
                        <li>Beepbox - Music composition</li>
                        <li>Jsfxr - Sound effect creation</li>
                    </ul>
                </p>
                
                <div>
                    <h2>Check out the itch.io page!</h2>
                    <iframe className="itch-embed" height="167" src="https://itch.io/embed/4205828?dark=true" width="552">
                        <a href="https://eleven-scute-turtle.itch.io/twisted-spindustry">Twisted Spindustry by eleven_scute_turtle</a>
                    </iframe>
                </div>
            </div>
        </Page>
    );
}
export default TwistedSpindustry