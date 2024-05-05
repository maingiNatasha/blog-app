import { useState } from 'react';

const NewsLetterSignUp = () => {
    const[email, setEmail] = useState("");
    const[name, setName] = useState("");
    const[isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	}

    return (
        <div className='p-2'>
            <h1 className='font-bold py-2'>Sign Up for Our Newsletters</h1>
            <strong className='text-gray-400'>Get notified of the best deals on our WordPress themes.</strong>
            <div className='py-4'>
                <form className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
                    <input className='border-2 p-3 rounded-md' type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input className='border-2 p-3 rounded-md' type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className='p-3 bg-black font-bold uppercase text-white rounded-md hover:bg-gray-800' type="submit">Subscribe</button>
                </form>
                <label className="flex pt-4">
                    <input className="mr-6" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <p className={isChecked ? "text-black" : "text-gray-400"}>By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</p>
                </label>
            </div>
        </div>
    )
}

export default NewsLetterSignUp