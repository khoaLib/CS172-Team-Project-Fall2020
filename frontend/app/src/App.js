import React from "react";
import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Main1 from "./Components/main1";

function App() {
	return (
		<BrowserRouter>
			<div>
				{/* App Component Has a Child Component called Main*/}
				<Main1 />
				<Main1 />
			</div>
		</BrowserRouter>
	);
}

export default App;
