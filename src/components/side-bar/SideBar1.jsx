import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";

const SideBar1 = () => {
	const[isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	}

    return (
        <div>
            <h1 className="font-bold">Follow Us</h1>
            <div className="py-4 flex items-center space-x-4 ">
                <a href="https://www.facebook.com" target="blank"><FaFacebook size={25} /></a>
                <a href="https://www.twitter.com" target="blank"><FaTwitter size={25} /></a>
                <a href="https://www.instagram.com" target="blank"><RiInstagramFill size={25} /></a>
                <a href="https://www.pinterest.com" target="blank"><FaPinterest size={25} /></a>
                <a href="https://www.youtube.com" target="blank"><IoLogoYoutube size={25} /></a>
            </div>
            <p className="py-4">
                <strong>Subscription</strong><br />
                Subscribe to our newsletter and receive a selection of cool articles every weeks
            </p>
            <form className="">
                <input className="p-3 w-full bg-gray-100" type="email" placeholder="Enter your email" required value={""} onChange={""}  />
                <label className="flex pt-4" htmlFor="checkbox">
                    <input id="checkbox" name="checkbox" className="mr-4" type="checkbox" required checked={isChecked} onChange={handleCheckboxChange}/>
                    <p className={isChecked ? "text-black" : "text-gray-400"}>By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</p>
                </label>
                <button className="bg-black text-white font-bold uppercase tracking-widest p-3 mt-4 w-full" type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default SideBar1