import React from 'react';

import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FiSend } from "react-icons/fi";

const ButtonWrapper = () => {
  return (
    <div className="bg-slate-100 min-h-[200px] flex items-center justify-center">
      <NeumorphismButton />
    </div>
  );
};



const Header = () => {
    return (
        <div>

          
          <Sidebar></Sidebar>


          
                  <header className="bg-blue-500 text-white p-4">
        <nav className="flex justify-around">
          
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          
        </nav>
      </header>
      
 
            
        </div>
    );
};

export default Header;