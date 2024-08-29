import React from 'react';
import { Outlet,} from 'react-router-dom';
import Header from './Header/Header';

const MainLayout = () => {
  return (
    <div>

        <Header></Header>
      <main className="p-4">
        <Outlet />
      </main>

      <footer className="bg-blue-500 text-white p-4 text-center">
        &copy; 2024 My Multi-Page App
      </footer>
    </div>
  );
}

export default MainLayout;



