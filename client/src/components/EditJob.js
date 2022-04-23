import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from 'date-fns';
import axios from "axios";

//FORM SPECIFIC
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'


// .    .    .    .--. 
// |\  /|   / \   |   )
// | \/ |  /___\  |--' 
// |    | /     \ |    
// '    ''       `'    

const mapContainerStyle = {
    width: "50vw",
    height: "42vh"
}

const EditJob = (props) => {

// .---. .--. .--. .    .
// |    :    :|   )|\  /|
// |--- |    ||--' | \/ |
// |    :    ;|  \ |    |
// '     `--' '   `'    '
	// States for JOB
	const [jobDetails, setJobDetails] = useState({});
	const [title, setTitle] = useState("");
	const [company, setCompany] = useState("");
	const [salary, setSalary] = useState();
	const [jobType, setJobType] = useState(""); 
		// DROPDOWN: Unknown, Remote, On-Site, Hybrid
	const [location, setLocation] = useState("");
	const [followUp, setFollowUp] = useState(new Date());
	const [notes, setNotes] = useState("");
	const [stage, setStage] = useState(""); // drop down
	const { id } = useParams();
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/jobs/${id}`)
			.then((res) => {
				console.log(res.data);
				setJobDetails(res.data);
				setFollowUp(res.data.followUp);
				setTitle(res.data.title);
				setCompany(res.data.company);
				setSalary(res.data.salary);
				setJobType(res.data.jobType);
				setLocation(res.data.location);
				setStage(res.data.stage);
				setNotes(res.data.notes);
			})
			.catch((err) => {
				console.log(err);
				//If Error Display the Error Page
				navigate("/career-detector/error");
			});
	}, [id, navigate]);


	const onSubmitHandler = (e) => {
        e.preventDefault();
		axios.put(`http://localhost:8000/api/jobs/${id}`,
		{
			followUp,
			title,
            company,
            salary,
            jobType,
            location,
			stage,
			notes
		},
        {withCredentials:true, credentials:'include'}
		)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/career-detector/dashboard');
            })
            .catch((err) => {
                console.log(err);
				setErrors(err.response.data.errors)
				//  The reason for validation error not showing up is the re-routing to error. Please do NOT comment this out ever again.
				// navigate('/career-detector/error')
            })
    };

	
// .    .    .    .--. 
// |\  /|   / \   |   )
// | \/ |  /___\  |--' 
// |    | /     \ |    
// '    ''       `'    


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
			<div className="text-center " id="myHeader">
				<div className="text-mont p-1 d-flex justify-content-between align-items-center">
					<p className="navbar-brand">
						<strong>EDIT JOB DETAILS</strong>
					</p>
					<p className="navbar-brand">
						<em>
							Now I've gotten into astronomy, and my whole career is looking up.
						</em>
					</p>
				</div>

				<div className="mb-3 text-center">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="/career-detector/welcome">
							CAREER DETECTOR
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="m-1 nav-item">
									<a className="nav-link" href="/career-detector/dashboard">
										DASHBOARD
									</a>
								</li>
								<li className="m-1 nav-item">
									<a className="nav-link" href="/career-detector/add-job">
										ADD JOB
									</a>
								</li>
								<li className="m-1 nav-item">
									<a className="nav-link" href="/">
										SIGN OUT
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>

					
			{/* <!--
		.---. .--. .--. .    .
		|    :    :|   )|\  /|
		|--- |    ||--' | \/ |
		|    :    ;|  \ |    |
		'     `--' '   `'    '
		 --> */}
			<div className="text-mont d-flex justify-content-center">
				<Form
					className="form-sizing-double blurred-box-form"
					onSubmit={onSubmitHandler}
				>		
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Next Follow Up: (Optional) </Form.Label>
							<Form.Control
								type="datetime-local"
								value={followUp}
								className="text-center"
								placeholder={followUp}
								onChange={(e) => {
												setFollowUp(e.target.value)
											}}
							/>
							{
								errors.followUp ?
									<p>{errors.followUp.message}</p> :
									null
							}
						</Form.Group>
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Job Title </Form.Label>
							<Form.Control
								placeholder={jobDetails.title}
								type="text"
								className="text-center"
								onChange={(e) => {
												setTitle(e.target.value)
											}}
							/>
							{
								errors.title ?
									<p>{errors.title.message}</p> :
									null
							}
						</Form.Group>
					</div>
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Company </Form.Label>
							<Form.Control
								placeholder={jobDetails.company}
								type="text"
								className="text-center"
								onChange={(e) => {
												setCompany(e.target.value)
											}}
							/>
							{
								errors.company ?
									<p>{errors.company.message}</p> :
									null
							}
						</Form.Group>
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Salary </Form.Label>
							<Form.Control
								placeholder={jobDetails.salary}
								className="text-center"
								type="number"
								onChange={(e) => {
												setSalary(e.target.value)
											}}
							/>
							{
								errors.salary ?
									<p>{errors.salary.message}</p> :
									null
							}
						</Form.Group>
					</div>
					<div className="d-flex justify-content-center align-items-end">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Commute </Form.Label>
							<Form.Select
								className="text-center"
								defaultValue={jobDetails.jobType}
								onChange={(e) => {
												setJobType(e.target.value)
											}}
							>
								<option>Unknown</option>
								<option>Remote</option>
								<option>On-Site</option>
								<option>Hybrid</option>
							</Form.Select>
							{
								errors.jobType ?
									<p>{errors.jobType.message}</p> :
									null
							}
						</Form.Group>
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Location (Optional) </Form.Label>
							<Form.Control
								placeholder={jobDetails.location}
								className="text-center"
								type="text"
								onChange={(e) => {
												setLocation(e.target.value)
											}}
							/>
							{
								errors.location ?
									<p>{errors.location.message}</p> :
									null
							}
						</Form.Group>
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Stage of Technical Application </Form.Label>
							<Form.Select
								defaultValue={jobDetails.stage}
								className="text-center"
								onChange={(e) => {
												setStage(e.target.value)
											}}
							>
								<option>Applied</option>
								<option>Pending Company Response</option>
								<option>Technical Interview</option>
								<option>Pending Company Offer</option>
								<option>Pending My Decision</option>
								<option>Other: See Additional Notes</option>
							</Form.Select>
							{
								errors.stage ?
									<p>{errors.stage.message}</p> :
									null
							}
						</Form.Group>
					</div>
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Additional Notes </Form.Label>
							<Form.Control
								placeholder={jobDetails.notes}
								className="text-center"
								as="textarea"
								rows={3}
								onChange={(e) => {
									setNotes(e.target.value)
								}}
							/>
							{
								errors.notes ?
									<p>{errors.notes.message}</p> :
									null
							}
						</Form.Group>
					</div>
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<button className="btn-link-style-general btn btn-link-style-submit mt-3">Update</button>
						</Form.Group>
					</div>
				</Form>
					{/*       
					.    .    .    .--. 
					|\  /|   / \   |   )
					| \/ |  /___\  |--' 
					|    | /     \ |    
					'    ''       `'    
										*/}
				{/* Liam this is the section for your maps....HS-04212022 */}

				<div className=" w-20  d-flex justify-content-center align-items-center polaroid-side-display">
					<GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center} onClick={onMapClick}>
					{markers.map(x => <Marker key={x.time.toISOString()} position={{ lat: x.lat, lng: x.lng }} onClick={() => setSelected(x)} />)}

					{ selected ? (
						<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => setSelected(null)}>
							{/* {onCloseClick={() => setSelected(null) - After closing info window, can re-open another*/}
						<div>
							<h2>New Location</h2>
							<button onClick={() => handleRemove(selected)}>Remove Marker</button>
							<p>Time: {formatRelative(selected.time, new Date())}</p> {/* current relative time */}
							<p>Latitude: {selected.lat}, Longitude: {selected.lng}</p>
						</div>
						</InfoWindow>) : null }
					</GoogleMap> 
				</div>
			</div>
		</div>
	);
};

export default EditJob;
