import Avatar from "../../assets/HomeImage.png";
import { useState } from 'react';
import CommentForm from "./CommentForm";
import { Link } from "react-router-dom";

const comments = [
    {
        authorPic: Avatar,
        authorName: "Natasha Maingi",
        comment: `The pain itself is important to the main adipisicing elite. Extremely flexible.
                The annoyances which even the advantage must be repudiated are the result of the pleasures of toil never let any one of them flatter him,
                but he hates to shun the just flight of the present choice and success! None of the accusers foresee something similar, however.`
    },
    {
        authorPic: Avatar,
        authorName: "Kiendi Natasha",
        comment: `The pain itself is important to the main adipisicing elite. Extremely flexible.
                The annoyances which even the advantage must be repudiated are the result of the pleasures of toil never let any one of them flatter him,
                but he hates to shun the just flight of the present choice and success! None of the accusers foresee something similar, however.`
    },
    {
        authorPic: Avatar,
        authorName: "Tasha Kendy",
        comment: `The pain itself is important to the main adipisicing elite. Extremely flexible.
                The annoyances which even the advantage must be repudiated are the result of the pleasures of toil never let any one of them flatter him,
                but he hates to shun the just flight of the present choice and success! None of the accusers foresee something similar, however.`
    }
];

const BlogComments = () => {
    const[viewComments, setViewComments] = useState(false);

    const handleOnClick = () => {
        setViewComments(!viewComments);
    };

    return (
        <div className='md:py-4 lg:py-6'>
            <button className='bg-black text-white font-bold uppercase tracking-widest p-3 w-full  hover:bg-gray-800' onClick={handleOnClick}>{viewComments ? "Hide Comments" : `View Comments(${comments.length})`}</button>
            {viewComments &&
            comments.map((comment, index) => (
                <div key={index} className="bg-[#FAFAFA] p-4 my-4">
                    <div className='py-4 flex items-center'>
                        <img src={comment.authorPic} alt="Avatar" className="w-[50px] h-[50px] rounded-full"/>
                        <strong className="ml-4">{comment.authorName}</strong>
                    </div>
                    <div>
                        <strong>Comment:</strong>
                        <p className="italic mb-4">{comment.comment.slice(0, 200)}...</p>
                        <Link to={'/'} className="text-blue-600 font-semibold">Read More</Link>
                    </div>
                </div>
            ))}
            <CommentForm />
        </div>
    )
}

export default BlogComments