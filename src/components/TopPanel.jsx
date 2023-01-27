import React from 'react';
import { useLocation } from 'react-router-dom';

const TopPanel = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div
      className={`absolute top-2  ${
        location.pathname === '/dashboard' && 'text-white'
      }`}
    >
      <div className="flex items-center justify-end w-96 gap-4 px-4">
        <p className="font-semibold mr-auto">9:41</p>
        <i class="fa-solid fa-signal"></i>
        <i class="fa-solid fa-wifi"></i>
        <i class="fa-solid fa-battery-full text-xl"></i>
      </div>
    </div>
  );
};

export default TopPanel;
