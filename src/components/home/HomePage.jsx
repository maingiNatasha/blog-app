//import React from 'react'
import OtherNavigation from "../../common/OtherNavigation"

const HomePage = () => {
	return (
		<div>
			<div className="home-image h-[100vh] w-full">
			<OtherNavigation />
			<div className="absolute inset-20 flex items-center justify-center">
				<div className="py-10 text-center">
					<div className="text-white tracking-widest py-12">
						<h1 className="font-extrabold uppercase">Inspiration for travel by real people</h1>
						<p className="font-bold">Book smart, travel simple</p>
					</div>
					<a href="#travel">
						<button className="text-black bg-white p-4 font-bold rounded-sm hover:bg-gray-300 transform transition-all">Start planning your trip</button>
					</a>
				</div>
			</div>
			</div>
		</div>
	)
}

export default HomePage