import React from "react";
import "./ThemeToggler.css";

function ThemeToggler() {
	return (
		<div class="toggle">
			<input type="checkbox" id="toggle" />
			<label for="toggle"></label>
		</div>
	);
}

export default ThemeToggler;
