"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Page() {
  const [open, setOpen] = useState(false);

  const menu = {
    "Western Food": ["Pasta", "Burger", "Chicken Alfredo"],
    "Local Food": ["Jollof Rice", "Waakye", "Banku & Tilapia"],
    "African Food": ["Egusi Soup", "Suya", "Pepper Soup"],
    "Drinks": ["Sobolo", "Palm Wine", "Fruit Juice"],
    "Pastries": ["Meat Pie", "Cupcake", "Doughnut"]
  };

  return (
    <div>
      {/* Navbar */}
      <div style={{display:"flex", justifyContent:"space-between", padding:"20px"}}>
        <h1 style={{color:"gold"}}>Rich Fulfilment</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div style={{padding:"20px"}}>
          <a href="#menu">Menu</a>
        </div>
      )}

      {/* Hero */}
      <div style={{textAlign:"center", padding:"80px 20px"}}>
        <h2 style={{fontSize:"40px", color:"gold"}}>Luxury Catering</h2>
        <p>Ghanaian inspired premium food experience</p>
      </div>

      {/* Menu */}
      <div id="menu" style={{padding:"40px"}}>
        {Object.keys(menu).map((cat) => (
          <div key={cat} style={{marginBottom:"30px"}}>
            <h3 style={{color:"gold"}}>{cat}</h3>
            <ul>
              {menu[cat].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{textAlign:"center", padding:"30px", opacity:0.7}}>
        © 2026 Rich Fulfilment Catering Services
      </div>
    </div>
  );
}
