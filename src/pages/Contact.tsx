import Page from './Page';
import itchLogo from '../assets/itchio-logo.svg';
import githubLogo from '../assets/github-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.svg';
import ContactForm from '../components/ContactForm';

export default function Contact(): React.ReactNode {
    return (
        <Page>
            <h1>Contact</h1>
            <p>For contacting me directly, please email <a href="mailto:patrickcabigao@ucsb.edu">patrickcabigao@ucsb.edu</a>.</p>
            <br/>
            <p>You may also find me on these sites:</p>

            <ul className="contact-sites">
                <li>
                    <img src={itchLogo} alt="itch.io logo"/>
                    <a href="https://eleven-scute-turtle.itch.io/">itch.io</a>
                </li>

                <li>
                    <img src={githubLogo} alt="GitHub logo"/>
                    <a href="https://github.com/patrickcabigao">GitHub</a>
                </li>

                <li>
                    <img src={linkedinLogo} alt="LinkedIn logo"/>
                    <a href="https://www.linkedin.com/in/patrick-cabigao-a4560629b/">LinkedIn</a>
                </li>
            </ul>

            <br/>
            <p>Alternatively, you can use my contact form:</p>
            <ContactForm/>
        </Page>
    );
}