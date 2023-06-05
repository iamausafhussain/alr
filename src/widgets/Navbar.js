import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ThemeToggler from "./ThemeToggler";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Navbar() {
	const [loading, setLoading] = useState(true);

	return (
		<div>
			<header>
				<img className="logo" src={Logo} alt="logo" />
				<nav>
					<ul className="nav__links">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contacts</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Links</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
						{/* <li>
							<ThemeToggler />
						</li> */}
					</ul>
				</nav>
				<a className="cta" href="#">
					<button>
						<span className="login__button__text">Log In</span>
						<ArrowOutwardIcon />
					</button>
				</a>
			</header>
			{loading && (
				<Box sx={{ width: "100%" }}>
					<LinearProgress color="inherit" />
				</Box>
			)}
		</div>
	);
}

export default Navbar;
