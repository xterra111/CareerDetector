import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api"
import { formatRelative } from 'date-fns'
import axios from "axios";

const mapContainerStyle = {
    width: "50vw",
    height: "42vh"
}

const EditJob = (props) => {
	const [jobDetails, setJobDetails] = useState({});
	const { id } = useParams();
	// Added the static value of id to test out the axios call - HS - 04212022
	//const id = "626197aaba458d2aaba4e8f2";
	const navigate = useNavigate();
	const [lat, setLat] = useState(32.715736)
    const [lng, setLng] = useState(-117.161087)
    const [libraries] = useState(["places"]);
	const [markers, setMarkers] = useState([])
	const [selected, setSelected] = useState(null);

	const center = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
    }

	const handleRemove = (item) => {
		const newTodos = markers.filter((y) => y !== item);
		console.log("test");
		setMarkers(newTodos);
		setSelected(null);
	}

	const onMapClick = useCallback((e) => setMarkers(currentState => [...currentState, { // Adding new markers on click
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date()
    }]), []);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/jobs/${id}`)
			.then((res) => {
				console.log(res.data);
				setJobDetails(res.data);
			})
			.catch((err) => {
				console.log(err);
				//If Error Display the Error Page
				navigate("/career-detector/error");
			});
	}, [id, navigate]);

	useEffect(() => {

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${jobDetails.location}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
            )
            .then((response) => {
                console.log(response);
                setLat(response.data.coord.lat);
                setLng(response.data.coord.lon);

            })
            .catch(function (error) {
                console.log(error);

            });
    },[jobDetails.location]);

	const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

	return (
		<div>
			{/* ...
.   .    .    .       ..--.     .    .--. 
|\  |   / \    \     / |   )   / \   |   )
| \ |  /___\    \   /  |--:   /___\  |--' 
|  \| /     \    \ /   |   ) /     \ |  \ 
'   ''       `    '    '--' '       `'   ` */}
			<div class="text-center " id="myHeader">
				<div class="p-1 d-flex justify-content-between align-items-center">
					<p class="navbar-brand">
						{/* <strong>Add Job for ${userLogin.firstName}</strong> */}
						<strong>EDIT JOB DETAILS</strong>
					</p>
					<p class="navbar-brand">
						<em>
							I focused on being a photographer, but nothing ever developed.
						</em>
					</p>
				</div>

				<div class="mb-3 text-center">
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
						<a class="navbar-brand" href="/career-detector/welcome">
							CAREER DETECTOR
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="m-1 nav-item">
									<a class="nav-link" href="/career-detector/dashboard">
										DASHBOARD
									</a>
								</li>
								<li class="m-1 nav-item">
									<a class="nav-link" href="/career-detector/add-job">
										ADD JOB
									</a>
								</li>
								<li class="m-1 nav-item">
									<a class="nav-link" href="/">
										SIGN OUT
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
			<div class=" d-flex ">
				<div class=" d-flex content  blurred-box-form w-75">
					{/* <!-- TABLE --> */}

					<table class="table table-hover">
						<tbody>
							<tr>
								<th>Next Follow Up:</th>
								
								<td>{jobDetails.followUp}</td>
							</tr>
							<tr>
								<th>Job Title:</th>
								
								<td>{jobDetails.title}</td>
							</tr>
							<tr>
								<th>Company:</th>

								<td>{jobDetails.company}</td>
							</tr>
							<tr>
								<th>Salary:</th>
								<td>
									<td>{jobDetails.salary}</td>
								</td>
							</tr>
							<tr>
								<th>Commute:</th>

								<td>{jobDetails.jobType}</td>
							</tr>
							<tr>
								<th>Location:</th>

								<td>{jobDetails.location}</td>
							</tr>
							<tr>
								<th>Stage of Technical Application:</th>

								<td>{jobDetails.stage}</td>
							</tr>
							<tr>
								<th>Additional Notes:</th>

								<td>{jobDetails.notes}</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* Liam this is the section for your maps....HS-04212022 */}

				<div class=" w-20  d-flex justify-content-center align-items-center polaroid-side-display">
					{/* <div class="content text-center "> */}
					<GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center} onClick={onMapClick}>
					{markers.map(x => <Marker key={x.time.toISOString()} position={{ lat: x.lat, lng: x.lng }} onClick={() => setSelected(x)} />)}

				{ selected ? (
				<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => setSelected(null)}>
					{/* onCloseClick={() => setSelected(null) - After closing info window, can re-open another*/}
					<div>
						<h2>New Location</h2>
						<button onClick={() => handleRemove(selected)}>Remove Marker</button>
						<p>Time: {formatRelative(selected.time, new Date())}</p> {/* current relative time */}
						<p>Latitude: {selected.lat}, Longitude: {selected.lng}</p>
					</div>
				</InfoWindow>) 
				: null }
						</GoogleMap> 
						{/* <img
							src="/../views/img/2011-ireland-modern2.jpg"
							alt="ireland-modern2"
							class="polaroid-sizing-big"
						/> */}
						{/* <div class="container">
							<p>Ireland 2011 - L.Chen</p>
						</div> */}
					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default EditJob;
