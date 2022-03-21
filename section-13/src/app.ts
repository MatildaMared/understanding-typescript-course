import axios from "axios";
const { API_KEY } = require("./apikey");
const form = document.querySelector("form");
const addressInput = document.querySelector("#address") as HTMLInputElement;

type GoogleGeoCodingResponse = {
	results: { geometry: { location: { lat: number; lng: number } } }[];
	status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
	event.preventDefault();

	const enteredAddress = addressInput.value;
	console.log(enteredAddress);

	// send to google api
	axios
		.get<GoogleGeoCodingResponse>(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
				enteredAddress
			)}&key=${API_KEY}`
		)
		.then((response) => {
			if (response.data.status !== "OK") {
				throw new Error("Could not fetch location!");
			}
			const coordinates = response.data.results[0].geometry.location;
			const map = new google.maps.Map(document.getElementById("map")!, {
				center: coordinates,
				zoom: 16,
			});
			new google.maps.Marker({
				position: coordinates,
				map: map,
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

form?.addEventListener("submit", searchAddressHandler);
