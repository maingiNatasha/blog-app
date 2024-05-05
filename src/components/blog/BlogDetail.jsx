//import React from 'react'
import { useParams } from "react-router-dom";
import { blogs } from "../../utils/localDB";
import Navigation from "../../common/Navigation";
import Footer from "../../common/Footer";
import BlogBanner from "./BlogBanner";

import BlogContent from "./BlogContent";
import BlogSideBar from "./BlogSideBar";
import BlogComments from "./BlogComments";
import SimilarBlogs from "./SimilarBlogs";
import NewsLetterSignUp from "./NewsLetterSignUp";

const BlogDetail = () => {
	const { id } = useParams();
	const blogPost = blogs.find((blog) => blog.id === id);

	return (
		<>
			<Navigation />
			<BlogBanner blogPost = {blogPost} />
			<div className="container m-auto pb-10">
				<div className="grid md:grid-cols-3 md:gap-4 lg:gap-20 py-10">
					<div className="md:col-span-2">
						<BlogContent />
						<BlogComments />
						<NewsLetterSignUp />
						<SimilarBlogs />
					</div>
					<div className="p-4 my-4">
						<BlogSideBar />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default BlogDetail