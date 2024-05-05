import { useState } from "react";
import Footer from "../../common/Footer"
import Navigation from "../../common/Navigation"

const initialState = {
	name: "",
	phone: "",
	email: "",
	subject: "",
	message: ""
};


const ContactUs = () => {
	const [successMessage, setSuccessMessage] = useState(false);
	const [loading, setLoading] = useState(false);

	const [formData, setFormData] = useState(initialState);
	const { name, phone, email, subject, message } = formData;

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setFormData(initialState);

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			setSuccessMessage(true);

			setTimeout(() => {
                setSuccessMessage(false);
            }, 3000);
        }, 3000);
	};

	const handleOnChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Navigation />
			<div className="container m-auto py-8">
				<div>
					<h1 className="font-extrabold tracking-wider py-4 uppercase">Contact Us</h1>
					<p className="pb-4">For more information about our Blog Website or if you would like to reach out to us, fill in the form below then send your message to us.<br /> Feel free to contact us  at anytime.</p>
				</div>
				<div className="py-4">
					<form className="py-2 lg:w-[70%]" onSubmit={handleOnSubmit}>
						<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex flex-col">
								<label className="font-semibold py-2" htmlFor="name">Name</label>
								<input id="name" className="bg-gray-100 p-2 rounded-md" type="text" name="name" value={name} onChange={handleOnChange} placeholder="Enter Name" required/>
							</div>
							<div className="flex flex-col">
								<label className="font-semibold py-2" htmlFor="phone">Phone Number</label>
								<input id="phone" className="bg-gray-100 p-2 rounded-md" type="text" name="phone" value={phone} onChange={handleOnChange} placeholder="Enter Phone Number"/>
							</div>
							<div className="flex flex-col">
								<label className="font-semibold py-2" htmlFor="email">Email</label>
								<input id="email" className="bg-gray-100 p-2 rounded-md" type="email" name="email" value={email} onChange={handleOnChange} placeholder="Enter Email" required/>
							</div>
							<div className="flex flex-col">
								<label className="font-semibold py-2" htmlFor="subject">Subject</label>
								<input id="subject" className="bg-gray-100 p-2 rounded-md" type="text" name="subject" value={subject} onChange={handleOnChange} placeholder="Enter Subject"/>
							</div>
						</div>
						<div className="flex flex-col">
							<label className="font-semibold py-2" htmlFor="message">Message</label>
							<textarea id="message" className="bg-gray-100 p-2 rounded-md" type="text" name="message" value={message} onChange={handleOnChange} placeholder="Enter Message" cols={10} rows={10} required></textarea>
						</div>
						{successMessage && (
							<div className="bg-green-200 p-4 my-4 rounded text-center">
								<strong className="text-green-900">Message sent successfully!🎉🎉🎊</strong>
							</div>
						)}
						<button className="p-2 bg-black text-white font-bold uppercase tracking-widest rounded-md mt-4 w-full disabled:bg-gray-700" type="submit" disabled={loading}>
							{loading ? "Sending Message..." : "Send"}
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ContactUs