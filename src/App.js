import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Maincard from './Maincard';
import Cardsrows from './Cardsrows';
import Footer from './Footer';
import Lastfooter from './Lastfooter';
import Home from './Home'
import Pret from './Pret'
import Thirdpage from './Thirdpage';



function App() {
  return (
    <BrowserRouter>
    <div >

     <Header />
     <Navbar/>

     <Routes>
       <Route path= "/" exact element = {<Home/>} />
       <Route path = "/Pret" exact element = {<Pret/>} />
       <Route path = "/Thirdpage" exact element = {<Thirdpage/>} />

       
    

       
    
     </Routes>

   
     <Lastfooter/>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
