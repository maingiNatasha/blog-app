import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { TfiPinterest } from "react-icons/tfi";
import { ImLinkedin2 } from "react-icons/im";
import { BiLogoTelegram } from "react-icons/bi";
import { SiWhatsapp } from "react-icons/si";

const AboutSocials = () => {
    return (
        <div className="py-12">
            <h1 className="font-bold">Our Social Media Platforms</h1>
            <p className="py-4">To stay connected and updated with us, you can follow us in the following social media platforms</p>
            <div className="flex py-8 space-x-5 md:space-x-12">
                <a href="https://www.facebook.com" target="blank" className="floating-button"><div className="bg-blue-700 py-4 px-6 md:px-8 lg:px-16 rounded"><FaFacebookF className="text-white" /></div></a>
                <a href="https://www.twitter.com" target="blank" className="floating-button"><div className="bg-black py-4 px-6 md:px-8 lg:px-16 rounded"><RiTwitterXFill className="text-white" /></div></a>
                <a href="https://www.pinterest.com" target="blank" className="floating-button"><div className="bg-red-700 py-4 px-6 md:px-8 lg:px-16 rounded"><TfiPinterest className="text-white" /></div></a>
                <a href="https://www.linkedin.com" target="blank" className="floating-button"><div className="bg-blue-900 py-4 px-6 md:px-8 lg:px-16 rounded"><ImLinkedin2 className="text-white" /></div></a>
                <a href="https://www.telegram.com" target="blank" className="floating-button"><div className="bg-blue-500 py-4 px-6 md:px-8 lg:px-16 rounded"><BiLogoTelegram className="text-white" /></div></a>
                <a href="https://www.whatsapp.com" target="blank" className="floating-button"><div className="bg-green-500 py-4 px-6 md:px-8 lg:px-16 rounded"><SiWhatsapp className="text-white" /></div></a>
            </div>
        </div>
    )
}

export default AboutSocials