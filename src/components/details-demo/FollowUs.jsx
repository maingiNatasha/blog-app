import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { useState } from "react";

const FollowUs = () => {
	const[email, setEmail] = useState("");
	const[isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	}

	return (
		<div className="md:pb-[100px] lg:pl-6 md:pl-6">
			<h1 className="font-bold">Follow Us</h1>
			<div className="flex space-x-12 lg:space-x-12 md:space-x-5 py-6">
				<FaFacebook size={25} />
				<FaTwitter size={25} />
				<RiInstagramFill size={25} />
				<FaPinterest size={25} />
				<IoLogoYoutube size={25} />
			</div>
			<div className="py-4">
				<strong>Subscription</strong>
				<p>Subscribe to our newsletter and receive a selection of cool articles every weeks</p>
			</div>
			<div className="py-4 w-full">
				<input className="placeholder:text-gray-500 bg-white rounded-md border-2 p-4 border-gray-300 w-full" type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				<button className="bg-black hover:bg-gray-700 text-white font-bold uppercase tracking-widest p-4 rounded-md w-full my-4" type="button">Subscribe</button>
				<label className="flex pt-4">
					<input className="mr-6" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
					<p className={isChecked ? "text-black" : "text-gray-400"}>By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</p>
				</label>
			</div>
		</div>
	)
}

export default FollowUs