import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
	return (
		<nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
			<span className="font-blod">React 2022</span>
			<span className="font-blod">
				<Link to="/" className="mr-2">Products</Link>
				<Link to="/about">About</Link>
			</span>
		</nav>
	);
};
