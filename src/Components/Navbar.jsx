import React from 'react'
import MenuBar from './MenuBar'
import OfferBar from './OfferBar'


function Navbar() {
  return (
    <>
        <nav className='min-h-[132px]  lg:w-[vw] border-2 border-purple-600'>
                <MenuBar/>
                <OfferBar/>
        </nav>

    </>
  )
}

export default Navbar