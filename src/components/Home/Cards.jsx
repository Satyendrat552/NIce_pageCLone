import React from 'react'
import Card from './Card'
import { FaWindows } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { FaJoomla } from "react-icons/fa";

const Cards = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
      <Card
      icon = { <FaWindows color="white" size={60} />}
     description = "download"
     title = "windows App>>"
      />
     <Card
      icon = { <FaApple color="white" size={60} />}
     description = "download"
     title = "mac os app>>"
      />
       <Card
      icon = { <FaWordpressSimple  color="white" size={60} />}
     description = "download"
     title = "wordpress app>>"
      />
       <Card
      icon = { <FaJoomla color="white" size={60} />}
     description = "download"
     title = "joomla extension>>"
      />
        <Card
      icon = { <FaJoomla color="white" size={60} />}
     description = "download"
     title = "joomla extension>>"
      />
     
    </div>
  )
}

export default Cards