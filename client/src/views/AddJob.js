import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

const AddJob = () => {
	const [jobTitle, setJobTitle] = useState("");
	const [company, setCompany] = useState("");
	const [salary, setSalary] = useState();
	const [jobType, setJobType] = useState(""); 
		// DROPDOWN: Unknown, Remote, On-Site, Hybrid
	const [location, setLocation] = useState("");
	const [followUp, setFollowUp] = useState();
		//Date Example: https://gist.github.com/mohanramphp/af4f0267f5b1c3c0e726e18019eb2a0b
	const [notes, setNotes] = useState("");
	const [stage, setStage] = useState(""); // drop down
	const [createdBy, setCreatedBy] = useState(""); 
		//is this needed here?
	const navigate = useNavigate();
    const [errors, setErrors] = useState({});

	const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/jobs', {
            jobTitle,
            company,
            salary,
            jobType,
            location,
			followUp,
			notes,
			stage,
			createdBy
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
            })
    };


	return (
		<div>
			{/* ...
.   .    .    .       ..--.     .    .--. 
|\  |   / \    \     / |   )   / \   |   )
| \ |  /___\    \   /  |--:   /___\  |--' 
|  \| /     \    \ /   |   ) /     \ |  \ 
'   ''       `    '    '--' '       `'   ` */}
			<div class="blurred-box text-center " id="myHeader">
				<div class="p-1 blurred-box d-flex justify-content-between align-items-center">
					<p class="navbar-brand">
						{/* <strong>Add Job for ${userLogin.firstName}</strong> */}
						<strong>Add Job for </strong>
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
									<a class="nav-link disabled" href="/career-detector/add-job">
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
			{/* <!-- 
.    .    .    .--. 
|\  /|   / \   |   )
| \/ |  /___\  |--' 
|    | /     \ |    
'    ''       `'   
		 --> */}
			{/* <div class="d-flex justify-content-center align-items-center polaroid-side-display">
				<div class="text-center ">
					<img
						src="../views/img/2011-austria-tunnel-of-windows.jpg"
						alt="austria-tunnel-of-windows"
						class="polaroid-sizing"
					/>
					<div class="container">
						<p>Austria 2011 - L.Chen</p>
					</div>
				</div>
			</div> */}

			{/* <!--
		.---. .--. .--. .    .
		|    :    :|   )|\  /|
		|--- |    ||--' | \/ |
		|    :    ;|  \ |    |
		'     `--' '   `'    '
		 --> */}
			<form
				className="polaroid-sizing blurred-box-form"
				onSubmit={onSubmitHandler}
			>				
				<div className="d-flex justify-content-center">
					{/* <input type="hidden" value="${userLogin.id}" path="user"/> */}
					<div className="form-sizing-double card-body">
						<label className="form-label"> Job Title </label>
						<br/>
						<input
							type="text"
							name="jobTitle"
							onChange={(e) => {
								setJobTitle(e.target.value)
							}} />
						{
							errors.jobTitle ?
								<p>{errors.jobTitle.message}</p> :
								null
						}
					</div>
					<div className="form-sizing-double card-body">
						<label className="form-label"> Company </label>
						<br/>
						<input
							type="text"
							name="company"
							onChange={(e) => {
								setCompany(e.target.value)
							}} />
						{
							errors.company ?
								<p>{errors.company.message}</p> :
								null
						}
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="form-sizing-double card-body">
						<label className="form-label"> Salary </label>
						<br/>
						<input
							type="number"
							name="salary"
							onChange={(e) => {
								setSalary(e.target.value)
							}} />
						{
							errors.salary ?
								<p>{errors.salary.message}</p> :
								null
						}
					</div>
					<div className="form-sizing-double card-body">
						<label className="form-label"> Job Type </label>
						<br/>
						<input
							type="text"
							name="jobType"
							onChange={(e) => {
								setJobType(e.target.value)
							}} />
						{
							errors.jobType ?
								<p>{errors.jobType.message}</p> :
								null
						}
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="form-sizing-double card-body">
						<label className="form-label"> Location </label>
						<br/>
						<input
							type="text"
							name="location"
							onChange={(e) => {
								setLocation(e.target.value)
							}} />
						{
							errors.location ?
								<p>{errors.location.message}</p> :
								null
						}
					</div>
					<div className="form-sizing-double card-body">
						<label className="form-label"> Next Follow Up </label>
						<br/>
						<input
							type="date"
							name="followUp"
							onChange={(e) => {
								setFollowUp(e.target.value)
							}} />
						{
							errors.followUp ?
								<p>{errors.followUp.message}</p> :
								null
						}
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="form-sizing-double card-body">
						<label className="form-label"> Stage </label>
						<br/>
						<input
							type="text"
							name="stage"
							onChange={(e) => {
								setLocation(e.target.value)
							}} />
						{
							errors.stage ?
								<p>{errors.stage.message}</p> :
								null
						}
				</div>
					<div className="form-sizing-double card-body">
						<label className="form-label"> Additional Notes </label>
						<br/>
						<input
							type="text"
							name="notes"
							onChange={(e) => {
								setNotes(e.target.value)
							}} />
						{
							errors.notes ?
								<p>{errors.notes.message}</p> :
								null
						}
					</div>
				</div>

			</form>
		</div>
	);
};

export default AddJob;

// Job Title: Text
// Company: Text
// Stage of Application:
	// 	"Applied",
	// 	"Pending Company Response",
	// 	"Technical Interview",
	// 	"Pending Company Offer",
	// 	"Pending My Decision",
	// 	"Other: See Additional Notes",
// - Other: See Additional Notes
// Salary: Integer
// Remote:
// - Unknown
// - Remote
// - Hybrid
// - On-Site
// Location: Text
// Additional Notes: Text Area