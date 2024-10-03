import React from 'react'
import MenuBar from './MenuBar'
import OfferBar from './OfferBar'


function Navbar() {
  return (
    <>
        <nav className='min-h-[132px]  lg:w-[vw] '>
                <MenuBar/>
                <OfferBar/>
        </nav>

    </>
  )
}

export default Navbar