//import React from 'react'
import TopDestinationCard from './TopDestinationCard';

const TopDestination = () => {
  return (
    <div className="container m-auto">
      <h1 className="font-bold">Top Destinations</h1>
      <p className='mt-2'>Tick one more destination off of your bucket list with one of our most popular vacations in 2022.</p>
      <TopDestinationCard />
    </div>
  )
}

export default TopDestination