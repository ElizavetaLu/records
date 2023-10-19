import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./RootLayout.scss";


export default function RootLayout() {
    return (
        <>
            <Header />

            <div className="main-content">
                <Outlet />
            </div>

            <Footer />
        </>
    )
}
