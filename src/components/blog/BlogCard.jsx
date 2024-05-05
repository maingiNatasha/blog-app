/* eslint-disable react/prop-types */
//import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiShare2 } from "react-icons/ci";

const BlogCard = ({ blogs }) => {
	const [visibleBlogs, setVisibleBlogs] = useState(8);
	const [showLoadMore, setShowLoadMore] = useState(true);

	const handleLoadMore = () => {
		if (visibleBlogs === blogs.length) {
			setVisibleBlogs(8); // Reset back to initial number of visible blogs
			setShowLoadMore(true);
		}
		else {
			setVisibleBlogs(blogs.length); // Display all blogs
			setShowLoadMore(false);
		}
	};

	return (
		<div>
			<div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{blogs.slice(0, visibleBlogs).map((blog) => (
					<div className="py-8" key={blog.id}>
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
								<span className="py-2 ml-2">{blog.time}</span>
								<span className="py-3 ml-2"><CiShare2 size={13} /></span>
								<span className="py-2 ml-1">{blog.shares} shares</span>
							</div>
						</div>
						<p className="py-2">{blog.description.slice(0, 100)}...</p>
						<Link to={`/blog-details/${blog.id}`}>
							<button className="font-bold text-blue-900 underline">Read More</button>
						</Link>
					</div>
				))}
			</div>
			<div className="text-center py-8">
				<button className="border border-black bg-white p-4 w-[20%] font-bold text-gray-600" onClick={handleLoadMore}>
					{showLoadMore ? "Load More" : "Show Less"}
				</button>
			</div>
		</div>
	)
}

export default BlogCard