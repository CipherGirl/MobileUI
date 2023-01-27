import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="max-h-14 bg-whte flex items-center justify-evenly text-3xl z-20">
      <i class="fa-solid fa-house"></i>
      <i class="fa-solid fa-clipboard-list"></i>
      {/* <div className="w-6 h-6 absolute z-10 bottom-[62%] left-[35.5%] bg-white nav-add"></div>
      <i class="plus fa-solid fa-circle-plus absolute bottom-[33%] text-7xl bg-white text-primary rounded-full border-4 border-b-8 border-t-0 border-[#c4c4c8]"></i>
      <div className="w-6 h-6 absolute z-20 bottom-[62%] right-[35.5%] bg-white nav-add"></div> */}
      <i
        onClick={() => navigate('/form')}
        class="fa-solid fa-circle-plus text-primary text-7xl mb-6 "
      />
      <i class="fa-solid fa-bell"></i>
      <i class="fa-solid fa-bars"></i>
    </nav>
  );
};

export default Navigation;
