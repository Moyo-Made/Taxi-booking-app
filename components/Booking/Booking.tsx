const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><html></html>");
const window = dom.window;

import React from "react";
import AutocompleteAddress from "./AutocompleteAddress";

function Booking() {
	const screenHeight = window.innerHeight * 0.6;
	return (
		<div className="p-5">
			<h2 className="text-[20px] font-semibold">Booking</h2>
			<div
				className="border-[1px] p-4 rounded-md shadow-sm"
				style={{ height: screenHeight }}
			>
				<AutocompleteAddress />
			</div>
		</div>
	);
}

export default Booking;
