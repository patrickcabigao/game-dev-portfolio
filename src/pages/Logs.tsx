import Page from "../components/Page";
import Log from "../components/Log";

const Logs = (): React.ReactNode => {
    return (
        <Page>
            <h1>Logs</h1>

            <Log title="First Log" date="August 31, 2026">
                I'm hoping to use these logs as a way to talk about how progress has been on my games so far. Nothing here yet, though. :)
            </Log>

        </Page>
    );
}
export default Logs;