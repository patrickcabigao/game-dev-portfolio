import Page from "../components/Page";
import robsterSprite from "../assets/robster-sprite.png";
import wiwiSprite from "../assets/wiwi-sprite.png";
import godotLogo from "../assets/godot-logo.png";

const About = (): React.ReactNode => {
    return (
        <Page>
            <h1>About me...</h1>
            <div className="about-div">
                <p>
                    Hi! I'm Patrick, and I'm a university student who's into game development as a hobby.
                    My first contact with game development was actually through <a href="https://scratch.mit.edu/">Scratch</a> in 
                    elementary school, after which I began to learn the Unity game engine in middle school,
                    and then finally settled on Godot not too long ago. I've always held an interest in indie games,
                    and my main goal in game development is to make a contribution to the indie game space I can be proud of.
                </p>
                <img src={godotLogo} alt="Godot logo" width="128px" height="128px"/>
            </div>
            <hr/>
            <h1>Game jams!</h1>
            <div className="about-div">
                <p>
                    One of my favorite parts of game development is these competitions 
                    called <a href="https://en.wikipedia.org/wiki/Game_jam">game jams</a>, where the goal is to build 
                    a full game during the competition based off of the theme announced at the start. I've 
                    participated both as a solo developer and as part of a team, and I can say I've greatly 
                    enjoyed both experiences. Competing alone usually becomes a large task of time management, 
                    having to consider which parts of the game (e.g. gameplay, art, sound design, UI) have to be 
                    prioritized at all times.
                </p>
                <img src={robsterSprite} alt="Robster the Lobster sprite" width="144px" height="96px"/>
            </div>
            <br/><br/>
            <div className="about-div">
                <img src={wiwiSprite} alt="Wiwi the Kiwi sprite" width="150px" height="150px"/>
                <p>
                    With a team, there tends to be roles that people fall into so they 
                    only have to focus on one aspect of the game at a time, but coordination becomes a challenge 
                    as everyone must be working in sync. In both cases, time is a very large issue as most jams 
                    only run within orders of a day to a week at most, so in my experience most jams have involved 
                    at least one all-nighter! After the competition comes the rating period, where all of the competitors
                    play each others' games and give feedback for everyone to improve. I really like that the whole idea
                    behind game jams is very community-focused, with developers supporting each other throughout the whole process.
                </p>
            </div>
            
            <br/><br/>
            <p>
                You can see some of my game jam games in the <a href="/games">games</a> section of this website, along
                with my current project!
            </p>

            <hr/>

            <h1>More about this website...</h1>
            <p>
                I originally made this website to have a single unified place to showcase both my games and
                anything else I want to share related to game development. Before, my games were mainly accessible through
                itch.io, however I still had games in other places which you wouldn't be able to find on itch.io,
                such as on Ludum Dare. Now with this website, I can have all of my games centralized
                and much more accessible for people! As I create more games, I also intend for the
                website as a way to advertise and bring attention to upcoming games, especially when I (hopefully)
                begin publishing my larger games on platforms such as Steam. I also wanted there to be some way for people
                who play my games to contact me just in case they would like to talk, which you can do
                so <a href="/contact">here!</a> 
                <br/><br/>
                One personal goal I have for creating this website is having a place showcasing my games, along with logs talking about
                them. I hope that through this website, more people will find my games and follow my journey through game development.
                If even a few more people get to play my games as a result of my website, I would definitely consider my website to be
                successful.
                <br/>
                Another goal with creating this website is to serve as a source of motivation for continuing larger projects.
                Very often, I will begin a larger project, only to lose motivation over time and eventually drop it and move onto another.
                I hope that by presenting my progress with my projects on my website, I will be more motivated to bring these projects
                to completion. If this helps me with completing more of my projects, I would also say that my website was a success.
                <br/>
            </p>

        </Page>
    );
}
export default About;