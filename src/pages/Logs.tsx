import Page from "./Page";
import Log from "../components/Log";

const Logs = (): React.ReactNode => {
    return (
        <Page>
            <h1>Logs</h1>

            <Log title="Hi" date="August 31, 2026">
                My life is sooooo hard.
            </Log>

            <Log title="Fade my day ones" date="August 31, 2026">
                Fade my day ones my day one ahh day ones
            </Log>

        </Page>
    );
}
export default Logs;