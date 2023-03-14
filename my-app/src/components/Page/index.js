import React from "react";
import PageContent from "../PageContent";
import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <Home />;
        }
    };

    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}
export default Page;