import './App.css';
import Page1 from './page1/Page1';
import Page2 from './page2/Page2';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {

    const [showModal, setShowModal] = useState(false);

    function handleModal (){
        if(showModal){
          return setShowModal(false)
        }
        setShowModal(true)
      }
      
  return (
    <div className="App">
      <Navbar handleModal = {handleModal} showModal = {showModal}/>
      <Routes>
        <Route path="/" element={<Page1 handleModal = {handleModal} showModal = {showModal}/>}></Route>
        <Route path="/wallet" element={<Page2 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
