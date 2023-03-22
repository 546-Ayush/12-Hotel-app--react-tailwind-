import React from 'react';

import Navbar from './Components/Navbar';
import FrontPart from './Components/Frontpart';
import Forms from './Components/Forms';
import Content_1 from './Components/Content_1';
import Content_2 from './Components/Content_2';
import Content_3 from './Components/Content_3';
import FeedBack from './Components/Feedback';
import Content_4 from './Components/Content_4';
import Maps from './Components/Maps';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='text-1 border-4 p-4' >
      {/* <Navbar/> */}
      <FrontPart/>
      {/* <Forms/> */}
      <Content_1/>
      <Content_2/>
      <Content_3/>
      <FeedBack/>
      <Content_4/>
      <Maps/>
      <Footer/>
    </div>
  )
}

export default App