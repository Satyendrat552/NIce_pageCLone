import React from 'react'

const HelpHero1 = ({ item }) => {
  return (
    // 'w-full' dene se ye automatic grid column ke size me fit ho jayega
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-40 object-cover" 
      />
      <div className="p-3">
        <h1 className="text-sm font-semibold text-gray-800 truncate">
          {item.title}
        </h1>
      </div>
    </div>
  )
}

export default HelpHero1