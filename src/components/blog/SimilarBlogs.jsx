import { blogs } from "../../utils/localDB";
import { Link } from 'react-router-dom';
import { CiShare2 } from "react-icons/ci";
import { LuClock10 } from "react-icons/lu";
import { GoDash } from "react-icons/go";

const SimilarBlogs = () => {
	return (
		<div>
			<h1 className="font-bold py-4">You may also like</h1>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-6">
				{blogs.slice(0, 3).map((blog) => (
					<div className="py-4 hover:scale-105 transition-all shadow-md px-2 lg:px-4 rounded-md" key={blog.id}>
						<div className="relative text-white font-bold">
							<img src={blog.image} alt={blog.title} className="tint-image" />
							<span className="absolute top-5 left-3 px-2 py-1 small">
								<span className="relative">{blog.category}</span>
								<span className="absolute inset-0 bg-white opacity-35 rounded"></span>
							</span>
							<span className="absolute top-5 left-[132px] px-2 py-1 small">
								<span className="relative">Aliquam</span>
								<span className="absolute inset-0 bg-white rounded opacity-35"></span>
							</span>
						</div>
						<h2 className="font-bold py-2">{blog.title}</h2>
						<div>
							<div className="flex py-2 small">
								<img src={blog.authorPic} alt="{blog.author} image"/>
								<span className="py-2 ml-3"><strong>{blog.author}</strong></span>
								<span className="py-3 ml-2"><CiShare2 size={13} /></span>
								<span className="py-2 ml-1">{blog.shares} shares</span>
							</div>
						</div>
						<p className="py-2">{blog.description.slice(0, 100)}...</p>
						<div className="flex py-2">
									<span className="mr-1">{blog.time}</span>
									<span className="py-1 mr-3"><GoDash /></span>
									<span className="py-1 mr-2"><LuClock10 /></span>
									<span>2 minute read</span>
								</div>
						<Link to={`/blog-details/${blog.id}`}>
							<button className="font-bold text-blue-900 underline">Read More</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default SimilarBlogs