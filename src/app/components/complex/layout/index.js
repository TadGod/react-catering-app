import React from "react";
import Navigation from "../navigation";
import Footer from '../../common/footer';

function Layout( {children} ) {
    return(
        <React.Fragment>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;