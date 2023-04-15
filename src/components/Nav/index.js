import React from "react";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
    } = props;

    return (
        <nav>
            <ul className="nav-menu">
                {pages.map((Page) => (
                    <li
                    className='menu-item'
                    key={Page.name}
                    >
                        <span onClick={() => setCurrentPage(Page)}
                        >
                            {(Page.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;