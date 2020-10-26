import React, {Component} from "react";
import {Route} from "react-router-dom";
import beers from "./beers";

class Main extends Component {
	render() {
		return (
			<div>
				{/*Render Different Component based on Route*/}
				<Route path="/" component={beers} />
			</div>
		);
	}
}

export default Main;
