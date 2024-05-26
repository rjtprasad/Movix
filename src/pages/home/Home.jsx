import React from 'react'
import './style.scss'

import HeroBanner from './heroBanner/HeroBanner'
import { useSelector } from 'react-redux'

function Home() {
  const url = useSelector((state)=>state.home.url)
  return (
    <div className='homePage'>
      {/* {
        Object.entries(url).length > 0 && 
      } */}
      <HeroBanner/>
      <div style={{height:1000}}></div>
    </div>
  )
}

export default Home