import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = () => {
	const[searchText, setSearchText] = useState("Search By Category...");

	return (
		<div className="container m-auto bg-white py-12 ">
			<div className="shadow-md flex items-center p-2">
				<input className="text-black bg-gray-100 rounded-md p-2 w-full font-bold outline-none mr-4" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
				<button className="hover:border-2 hover:border-blue-500 rounded-full hover:bg-gray-200 hover:p-1 transform transition-all" type="button"><BiSearchAlt2 size={25} className="text-black"/></button>
			</div>
		</div>
	)
}

export default SearchBar