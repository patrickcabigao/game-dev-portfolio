import Navbar from "../common/Navbar";

const Page = ({ children }: {children: React.ReactNode}): React.ReactNode => {
    return (
        <>
            <Navbar/>
            <div className="page">
                {children}
            </div>
        </>
    );
}
export default Page;