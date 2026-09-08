import Navbar from "./Navbar";
// import Footer from "./Footer";

const Page = ({ children }: {children: React.ReactNode}): React.ReactNode => {
    return (
        <>
            <Navbar/>
            <div className="page">
                {children}
            </div>
            {/* <Footer/> */}
        </>
    );
}
export default Page;