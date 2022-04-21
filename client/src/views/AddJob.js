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
	const [skills, setSkills] = useState("");
	const [benefits, setBenefits] = useState("");
	const [createdBy, setCreatedBy] = useState(""); 
		//is this needed here?
	const navigate = useNavigate();
    const [errors, setErrors] = useState({});

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
			skills,
			benefits,
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
			<div class="d-flex justify-content-center align-items-center polaroid-side-display">
				<div class="text-center ">
					{/* <img
						src="../views/img/2011-austria-tunnel-of-windows.jpg"
						alt="austria-tunnel-of-windows"
						class="polaroid-sizing"
					/> */}
					<div class="container">
						{/* <p>Austria 2011 - L.Chen</p> */}
					</div>
				</div>
			</div>

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
					<p className="form-sizing-double card-body">
						<label> Job Title </label>
						<input
							type="text"
							onChange={(e) => {
								setJobTitle(e.target.value)
							}} />
						{
							errors.jobTitle ?
								<p>{errors.jobTitle.message}</p> :
								null
						}
					</p>
					<p className="form-sizing-double form-group card-body">
						<label> Company </label>
						<input
							type="text"
							onChange={(e) => {
								setCompany(e.target.value)
							}} />
						{
							errors.company ?
								<p>{errors.company.message}</p> :
								null
						}
					</p>
					<p className="form-sizing-double form-group card-body">
						<label> Salary </label>
						<input
							type="text"
							onChange={(e) => {
								setSalary(e.target.value)
							}} />
						{
							errors.salary ?
								<p>{errors.salary.message}</p> :
								null
						}
					</p>					
				</div>
				<div className="d-flex justify-content-center">
					<p className="form-sizing-double form-group card-body">
						<label> Job Type </label>
						<input
							type="text"
							onChange={(e) => {
								setJobType(e.target.value)
							}} />
						{
							errors.jobType ?
								<p>{errors.jobType.message}</p> :
								null
						}
					</p>
					<p className="form-sizing-double form-group card-body">
						<label> Location </label>
						<input
							type="text"
							onChange={(e) => {
								setLocation(e.target.value)
							}} />
						{
							errors.location ?
								<p>{errors.location.message}</p> :
								null
						}
					</p>
					<p className="form-sizing-double form-group card-body">
						<label> Next Follow Up </label>
						<input
							type="text"
							onChange={(e) => {
								setFollowUp(e.target.value)
							}} />
						{
							errors.followUp ?
								<p>{errors.followUp.message}</p> :
								null
						}
					</p>					
				</div>

			</form>


			<form>
				<div class="d-flex justify-content-center">
					{/* <!-- userId --> */}
					{/* <form:input type="hidden" value="${userLogin.id}" path="user" /> */}

					<form input type="hidden" value="" path="user" />

					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="stageOfInterview">Stage of Interview:</form:label> */}

						<form label="stageOfInterview">Stage of Interview:</form>
						{/* <form:errors class="text-danger" path="stageOfInterview" /> */}
						<form input class="form-control" path="stageOfInterview" />
					</div>

					{/* <div class="form-sizing-double form-group card-body">
						<form:label path="nextFollowUp">
							Next Follow Up (Optional):
						</form:label>
						<form:errors class="text-danger" path="nextFollowUp" />
						<form:input type="date" class="form-control" path="nextFollowUp" />
          </div> */}
				</div>
				<div class="d-flex justify-content-center">
					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="jobTitle">Job Title:</form:label>
						<form:errors class="text-danger" path="jobTitle" />
						<form:input class="form-control" path="jobTitle" /> */}
					</div>

					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="company">Company:</form:label>
						<form:errors class="text-danger" path="company" />
						<form:input class="form-control" path="company" /> */}
					</div>
				</div>
				<div class="d-flex justify-content-center">
					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="areaOfExpertise">Area of Expertise:</form:label>
						<form:errors class="text-danger" path="areaOfExpertise" />
						<form:input class="form-control" path="areaOfExpertise" /> */}
					</div>
					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="salary">Salary (Optional):</form:label>
						<form:errors class="text-danger" path="salary" />
						<form:input type="number" class="form-control" path="salary" /> */}
					</div>
				</div>
				<div class="d-flex justify-content-center">
					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="dateApplied">Date Applied (Optional):</form:label>
						<form:errors class="text-danger" path="dateApplied" />
						<form:input type="date" class="form-control" path="dateApplied" /> */}
					</div>
					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="excitementLevel">Excitement Level:</form:label>
						<form:errors class="text-danger" path="excitementLevel" />
						<form:select
							class="form-control"
							path="excitementLevel"
							name="excitementLevel">
							<option value="0 - No Opinion">0 - No Opinion</option>
							<option value="1 - Not Excited">1 - Not Excited</option>
							<option value="2 - Leaning toward no">
								2 - Leaning toward no
							</option>
							<option value="3 - Leaning toward yes">
								3 - Leaning toward yes
							</option>
							<option value="4 - Really excited!">4 - Really excited!</option>
							<option value="Other: See Additional Notes">
								Other: See Additional Notes
							</option>
						</form:select> */}
					</div>

					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="location">Location:</form:label>
						<form:errors class="text-danger" path="location" />
						<form:select
							class="form-sizing-single form-control"
							path="location"
							name="location">
							<option value="unknown">Unknown</option>
							<option value="inPerson">In Person</option>
							<option value="hybrid">Hybrid</option>
							<option value="remote">Remote</option>
						</form:select> */}
					</div>
				</div>
				<div class="d-flex justify-content-center">
					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="contactInformation">
							Contact Information:
						</form:label>
						<form:errors class="text-danger" path="contactInformation" />
						<br />
						<form:textarea class="form-control" path="contactInformation" /> */}
					</div>

					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="jobDescription">
							Job Description (Optional):
						</form:label>
						<form:errors class="text-danger" path="jobDescription" />
						<br />
						<form:textarea class="form-control" path="jobDescription" /> */}
					</div>
				</div>
				<div class="d-flex justify-content-center">
					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="notableBenefits">
							Notable Benefits (Optional):
						</form:label>
						<form:errors class="text-danger" path="notableBenefits" />
						<br />
						<form:textarea class="form-control" path="notableBenefits" /> */}
					</div>

					<div class="form-sizing-double form-group card-body">
						{/* <form:label path="additionalNotes">
							Additional Notes (Optional):
						</form:label> */}
						{/* <form:errors class="text-danger" path="additionalNotes" />
						<br />
						<form:textarea class="form-control" path="additionalNotes" /> */}
					</div>
				</div>
				<div class="box-link-style-submit text-center m-2">
					<input
						class="btn btn-link-style-submit form-sizing-single form-group"
						type="submit"
						value="Submit"
					/>
				</div>
			</form>
		</div>
	);
};

export default AddJob;
