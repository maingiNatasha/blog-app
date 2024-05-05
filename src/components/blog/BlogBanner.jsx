/* eslint-disable react/prop-types */
import { LuClock10 } from "react-icons/lu";
import { GoDash } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";

const BlogBanner = ({ blogPost }) => {
  return (
    <div className="">
        <div className="relative px-4 sm:px-16 sm:py-20 md:py-30 h-[50vh]">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${blogPost.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div style={{ position: 'absolute', inset: '0', content: '""', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
            <div className="relative z-10 text-white py-20 md:px-20">
                <h1 className="font-bold tracking-wider">{blogPost.title}</h1>
                <p className="font-semibold tracking-wider py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, maxime.</p>
                <div className="flex sm:pt-6 font-semibold">
                    <span className="py-2 mr-3">By</span>
                    <img src={blogPost.authorPic} alt="{blog.author} image"/>
                    <span className="py-2 ml-1">{blogPost.author}</span>
                    <span className="py-3 ml-1 mr-3"><GoDash /></span>
                    <span className="py-3 mr-2"><LuClock10 /></span>
                    <span className="py-2">2 minute read</span>
                </div>
                <div className="flex font-semibold py-2">
                    <span className="py-2">{blogPost.time}</span>
                    <span className="py-3 ml-2"><CiShare2 size={13} /></span>
                    <span className="py-2 ml-1">{blogPost.shares} shares</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogBanner