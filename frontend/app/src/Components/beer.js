import React, {useState, useEffect} from "react";
//make API calls to backend
import axios from "axios";

//CSS Framework for developing responsive websites
import {Table} from "react-bootstrap";

function Beer() {
	const [result, setResult] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:8085/beers")
			.then((response) => {
				//update the state with the response data
				setResult(response.data._embedded.beers);
				// this.setState({
				// 	result: response.data._embedded.beers,
				// });
			})
			.catch((err) => {
				console.log(err);

				setError("error Loading");
			});
	});

	return (
		<div style={{textAlign: "center"}}>
			<div className="container">
				<br></br>
				<h2>Departure Flights</h2>
				<br></br>
				<div>
					<Table class="table table-dark">
						<thead class="thead-dark">
							<tr>
								<th scope="col">Date</th>
								<th scope="col">Airline</th>
								<th scope="col">Flight</th>
								<th scope="col">Time</th>
								<th scope="col">Destination</th>
								<th scope="col">Status</th>
							</tr>
						</thead>
						<tbody>
							{/*Display the Tbale row based on data recieved*/}
							{result.map((beers) => {
								return (
									<tr>
										<td>{beers.name}</td>
										<td>{beers.abv}</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
					{error}
				</div>
			</div>
		</div>
	);
}

export default Beer;
