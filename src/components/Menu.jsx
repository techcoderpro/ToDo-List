import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './menu.css';

function Menu() {
  return (
    <div className="flex justify-around">
      <h1 className="text-3xl font-bold">eShikhon</h1>
      <ul className="flex gap-[50px]">
        <li>
          <NavLink to ="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu