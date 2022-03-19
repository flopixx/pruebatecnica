import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import facebook from "../../images/img-social-facebook.svg";
import instagram from "../../images/img-social-instagram.svg";
import youtube from "../../images/img-social-youtube.svg";

const Header = () => {
	const [isOpen, setopen] = useState(false);

	const handleclick = () => {
		setopen(!isOpen);
	};
	return (
		<header>
			<div className='logo'>
				<img src={logo} alt={logo} />
			</div>
			<nav className={isOpen ? "navigation-active" : "navigation"}>
				<ul className='navigation-menu'>
					<li>Nuestros productos</li>
					<li>Disfruta cuidarte</li>
					<li>Blog</li>
				</ul>
				<div className='icons'>
					<img src={facebook} alt={facebook} />
					<img src={instagram} alt={instagram} />
					<img src={youtube} alt={youtube} />
				</div>
			</nav>

			<div className='toggle-menu' onClick={handleclick}>
				<div>&#9776;</div>
			</div>
		</header>
	);
};

export default Header;
