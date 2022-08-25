import Footer from "../Footer";
import Headers from "../Header";
import React from "react"
import Side from "../Side";
import { Row } from "antd";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>

            <Headers />
            <Row> <Side />
                {children}</Row>

            <Footer />

        </>
    )
}
export default Layout