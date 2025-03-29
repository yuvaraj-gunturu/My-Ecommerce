import React from 'react'
import Shopnow from '../components/Shopnow'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import LetterBox from '../components/LetterBox'

const Home = () => {
  return (
    <div>
      <Shopnow/>
      <LatestCollection/>
      <BestSeller />
      <Ourpolicy />
      <LetterBox />
    </div>
  )
}

export default Home
