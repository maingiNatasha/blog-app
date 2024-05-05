import Image from "../../assets/LatestImage.png";
import { LuClock10 } from "react-icons/lu";
import { GoDash } from "react-icons/go";

const LatestBlogs = [
	{
		id: 1,
		image: Image,
		title: "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
		date: "January 8, 2024",
		timeDuration: 2
	},
	{
		id: 2,
		image: Image,
		title: "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
		date: "January 8, 2024",
		timeDuration: 2
	},
	{
		id: 3,
		image: Image,
		title: "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
		date: "January 8, 2024",
		timeDuration: 2
	},
	{
		id: 4,
		image: Image,
		title: "10 Habits That Will Change Your Live for the Better If envy and jealousy are impacting your friendships",
		date: "January 8, 2024",
		timeDuration: 2
	}
];

const Latest = () => {
	return (
		<div className="lg:pl-6 md:pl-6">
			<h1 className="font-bold">The Latest</h1>
			<div className="py-4">
				{LatestBlogs.map((latest) => (
					<div key={latest.id} className="text-white py-4">
						<div className="p-4 relative">
							<div className="absolute inset-0" style={{ backgroundImage: `url(${latest.image})`, backgroundSize: 'cover' }}></div>
							<div style={{ position: 'absolute', inset: '0', content: '""', backgroundColor: 'rgba(0, 0, 0, 0.52)' }}></div>
							<div className="relative z-10">
								<strong className="font-bold">{latest.title}</strong>
								<div className="flex py-2">
									<span className="mr-2">{latest.date}</span>
									<span className="py-1 mr-4"><GoDash /></span>
									<span className="py-1 mr-2"><LuClock10 /></span>
									<span>{`${latest.timeDuration} minute read`}</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Latest