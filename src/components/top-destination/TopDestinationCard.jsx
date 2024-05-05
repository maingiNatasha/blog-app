//import React from 'react'
import { topDestinations } from "../../utils/localDB"

const TopDestinationCard = () => {
  return (
    <div className="mt-8 mb-[100px]">
		<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
			{topDestinations.map((destination) => (
				<div key={destination.id} className="relative">
					<img src={destination.image} alt={destination.text} className="tint-image object-cover" />
					<span className="text-white font-bold absolute top-[95px] left-[50px]">{destination.text}</span>
				</div>
			))}
		</div>
    </div>
  )
}

export default TopDestinationCard