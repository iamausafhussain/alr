import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Switch } from "@headlessui/react";

function Navbar() {
	const [enabled, setEnabled] = useState(false);

	return (
		<div>
			<header>
				<img className="logo" src={Logo} alt="logo" />
				<nav>
					<ul className="nav__links">
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
					</ul>
				</nav>
				<a className="cta" href="#">
					<button>Contact</button>
				</a>
				<Switch
					checked={enabled}
					onChange={setEnabled}
					className={`${
						enabled ? "bg-blue-600" : "bg-gray-200"
					} relative inline-flex h-6 w-11 items-center rounded-full`}>
					<span className="sr-only">Enable notifications</span>
					<span
						className={`${
							enabled ? "translate-x-6" : "translate-x-1"
						} inline-block h-4 w-4 transform rounded-full bg-white transition`}
					/>
				</Switch>
			</header>
			<Box sx={{ width: "100%" }}>
				<LinearProgress color="info" />
			</Box>
		</div>
	);
}

export default Navbar;
