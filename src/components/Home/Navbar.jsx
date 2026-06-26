import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
 const links = [
  { name: "Download", path: "/download" },
  { name: "400+ Features", path: "/Features" },
  { name: "1500+ Templates", path: "/Templates" },
  { name: "Website Builder", path: "/Website" },
  { name: "Blog", path: "/Blog" },
  { name: "Help", path: "/Help" },
];
  return (
    <nav className='w-full bg-[#FAFAFA] flex justify-between items-center p-4'>
      {/* w-5 ko badal kar w-fit kiya taaki logo ka naam sahi se dikhe, baaki design same hai */}
      <Link to="/">
        <h1 className='w-fit text-2xl font-semibold font-serif text-blue-500'>Nicepage</h1>
      </Link>
    
      <div className='flex justify-center items-center gap-10 text-sm text-[gray] capitalize font-serif font-thin'>
        {links.map((link)=>(
         <Link key={link.path} to={link.path} className="hover:bg-zinc-300 rounded-lg px-3 py-2 transition-all duration-300">
           {link.name}
         </Link>
        ))}
      </div>

      {/* Buttons par Link wrap kar diya bina design chhede */}
      <div className='flex justify-center items-center text-sm gap-2'>
         <Link to="/login">
           <Button name="Login"/>
         </Link>
         <Link to="/register">
           {/* Agar register page ka route alag hai to yahan de sakte hain */}
           <Button name="Register"/>
         </Link>
      </div>
    </nav>
  )
}

export default Navbar