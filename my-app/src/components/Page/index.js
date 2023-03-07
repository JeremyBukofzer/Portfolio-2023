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
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
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