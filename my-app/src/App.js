
import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';


function App() {
  const [pages] = useState([
    {
      name: "Home"
    },
    {
      name: "About"
    },
    {
      name: "Projects"
    },
    {
      name: "Contact"
    },
    {
      name: "Resume"
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
        pages= {pages}
        setCurrentPage= {setCurrentPage}
        currentPage= {currentPage}> 
        </Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
    
};

export default App;
