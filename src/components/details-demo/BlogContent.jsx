import BlogInfo from './BlogInfo';
import FollowUs from './FollowUs';
import Latest from './Latest';
import PossibleLikes from './PossibleLikes';


const BlogContent = () => {
    return (
        <div className='container m-auto'>
            <div className='py-10 md:flex'>
                <div className='pb-12 pt-2 lg:w-[70%] lg:px-6 md:w-[60%] md:mr-12'>
                    <BlogInfo />
                </div>
                <div className='lg:w-[30%] md:w-[40%] '>
                    <div><FollowUs /></div>
                    <div><Latest /></div>
                </div>
            </div>
            <div>
                <PossibleLikes />
            </div>
        </div>
    )
}

export default BlogContent