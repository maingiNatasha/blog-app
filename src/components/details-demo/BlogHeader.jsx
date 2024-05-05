import { LuClock10 } from "react-icons/lu";
import { GoDash } from "react-icons/go";

const BlogHeader = () => {
    return (
        <div className='blog-header-image h-[60vh]'>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white px-4">
                    <h1 className="font-extrabold uppercase tracking-widest">5 Efficient Rules How to Organize Your Working Place</h1>
                    <p className="font-semibold tracking-wider py-2">Relationship tips couples therapists are giving all the time</p>
                    <small className="flex py-8">
                        <span className="mr-2">by Joanna Wellick</span>
                        <span className="py-1 mr-4"><GoDash /></span>
                        <span className="py-1 mr-2"><LuClock10 /></span>
                        <span>2 minute read</span>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader