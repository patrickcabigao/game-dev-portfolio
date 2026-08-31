import Page from "./Page";

const Games = (): React.ReactNode => {
    return (
    <Page>
        <h1>What I'm Currently Working On...</h1>
        <p>jfkdlsjfkjasdkfldsjkl<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>fdds</p>

        <h1>My Proudest Game Jam Games!</h1>
        <ul className="jam-games">
            <li>
                <iframe height="167" src="https://itch.io/embed/4205828?dark=true" width="552">
                    <a href="https://eleven-scute-turtle.itch.io/twisted-spindustry">Twisted Spindustry by eleven_scute_turtle</a>
                </iframe>
            </li>
            
            <li>
                <iframe src="https://itch.io/embed/3953393?dark=true" width="552" height="167">
                    <a href="https://eleven-scute-turtle.itch.io/darkspark">Dark/Spark by eleven_scute_turtle</a>
                </iframe>
            </li>

            <li>
                <iframe width="552" height="167" src="https://itch.io/embed/2909169?dark=true">
                    <a href="https://gorbooo.itch.io/robster-the-lobster">Robster The Lobster by Gorbooo, eleven_scute_turtle</a>
                </iframe>
            </li>
        </ul>
    </Page>

    );
}
export default Games;