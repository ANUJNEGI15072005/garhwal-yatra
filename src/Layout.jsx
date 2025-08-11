import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
    return (
        <>
        <div className="sm:py-5 sm:px-10 py-5 px-2">
            <ScrollToTop/>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
        <Footer />
        </>
    );
}
