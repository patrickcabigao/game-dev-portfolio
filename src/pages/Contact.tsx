import Page from './Page';
import itchLogo from '../assets/itchio-textless-white.svg';

export default function Contact(): React.ReactNode {
    return (
        <Page>
            <h1>Contact</h1>
            <p>For contacting me directly:</p>
            <img src={itchLogo} alt="itch.io logo"/>
        </Page>
    );
}