import Page from "../components/Page";

const About = (): React.ReactNode => {
    return (
        <Page>
            <h1>About me...</h1>
            <p>
                Hi! I'm Patrick, and I'm a university student who's into game development as a hobby.
                My first contact with game development was actually through <a href="https://scratch.mit.edu/">Scratch</a> in 
                elementary school, after which I began to learn the Unity game engine in middle school,
                and then finally settled on Godot not too long ago. I've always held an interest in indie games,
                and my main goal in game development is to make a contribution to the indie game space I can be proud of.
            </p>
            <br/>
            <p>
                One of my favorite parts of game development is these competitions 
                called <a href="https://en.wikipedia.org/wiki/Game_jam">game jams</a>, where the goal is to build 
                a full game during the competition based off of the theme announced at the start. I've 
                participated both as a solo developer and as part of a team, and I can say I've greatly 
                enjoyed both experiences. Competing alone usually becomes a large task of time management, 
                having to consider which parts of the game (e.g. gameplay, art, sound design, UI) have to be 
                prioritized at all times. With a team, there tends to be roles that people fall into so they 
                only have to focus on one aspect of the game at a time, but coordination becomes a challenge 
                as everyone must be working in sync. In both cases, time is a very large issue as most jams 
                only run within orders of a day to a week at most, so in my experience most jams have involved 
                at least one all-nighter! After the competition comes the rating period, where all of the competitors
                play each others' games and give feedback for everyone to improve. I really like that the whole idea
                behind game jams is very community-focused, with developers supporting each other throughout the whole process.
            </p>
            <br/>
            <p>
                You can see some of my game jam games in the <a href="/games">games</a> section of this website, along
                with my current project!
            </p>

            <h1>About this website...</h1>
            <p>(something something 500 words...)</p>
        </Page>
    );
}
export default About;