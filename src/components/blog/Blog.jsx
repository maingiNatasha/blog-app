//import React from 'react'

import BlogCard from "./BlogCard";
import { blogs } from "../../utils/localDB";

const Blog = () => {
  return (
    <div className="container m-auto mt-8 mb-11">
		<h1 className="font-bold">Popular Blogs</h1>
		<BlogCard blogs={blogs}/>
    </div>
  )
}

export default Blog