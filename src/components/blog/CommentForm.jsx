
const CommentForm = () => {
  return (
    <div>
        <div className="py-8">
            <h2 className='my-4 font-bold'>Post your comment below</h2>
            <form className='bg-[#FAFAFA] p-4 lg:p-6 rounded-md'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <input type='text' placeholder='First Name' className='my-2 p-3 rounded-md placeholder:text-gray-700' />
                    <input type='text' placeholder='Last Name' className='my-2 p-3 rounded-md placeholder:text-gray-700' />
                </div>
                <textarea type='text' placeholder='Type your Comment' rows={5} className="w-full p-3 rounded-md placeholder:text-gray-700"></textarea>
                <button className="bg-black text-white font-bold uppercase p-3 mt-4 w-full rounded-md tracking-widest hover:bg-gray-800" type="submit">Comment</button>
            </form>
        </div>
    </div>
  )
}

export default CommentForm