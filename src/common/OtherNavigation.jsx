import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
	{
		id: 1,
		title: "Home",
        link: "/home"
	},
	{
		id: 2,
        title: "About Us",
        link: "/about",
	},
	{
		id: 3,
        title: "Contact Us",
        link: "/contact-us",
	},
	{
		id: 4,
        title: "Blogs",
        link: "/blogs",
	}
];

const OtherNavigation = () => {
    const[isOpen, setIsOpen] = useState(false);
	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="text-white uppercase z-30" style={{ backgroundColor: 'rgba(31, 41, 55, 0.4)' }}>
			<div className="container m-auto flex justify-between items-center py-3">
				<div className="font-extrabold logo"><strong>Logo</strong></div>
				<div className="hidden md:block">
					<ul className="md:flex space-x-4">
						{navItems.map((navItem) => (
							<li key={navItem.id} className="font-semibold hover:underline hover:underline-offset-8 hover:text-gray-300 transform transition-all">
								<Link to={navItem.link}>{navItem.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="md:hidden relative">
					<button onClick={toggleNavbar} className="text-white focus:outline-none">
						<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						>
						<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
						/>
						</svg>
					</button>
				</div>
                {isOpen && (
                    <div className="absolute top-14 left-0 w-full z-10 text-center" style={{ backgroundColor: 'rgba(31, 41, 55, 0.4)' }}>
                        <ul className="space-y-4 m-4">
                            {navItems.map((navItem) => (
                                <li key={navItem.id} className="font-bold hover:underline hover:underline-offset-8 hover:text-gray-300 transform transition-all">
                                    <Link to={navItem.link}>{navItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
			</div>
		</nav>
	);
}

export default OtherNavigation