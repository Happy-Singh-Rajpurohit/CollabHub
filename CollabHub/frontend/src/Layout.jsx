import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import Footer from "./components/Home/Footer/Footer";
import styles from "./Layout.module.css";
function Layout() {
    return (
        <div className={styles.outer}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;