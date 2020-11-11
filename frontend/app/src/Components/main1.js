import React from "react";
import {Route} from "react-router-dom";
import Beer from "./beer";

function Main1() {
	return (
		<div>
			{/*Render Different Component based on Route*/}
			<Route path="/" component={Beer} />
		</div>
	);
}

export default Main1;
