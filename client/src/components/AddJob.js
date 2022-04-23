import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

const AddJob = () => {

	// States for JOB
	const [title, setTitle] = useState("");
	const [company, setCompany] = useState("");
	const [salary, setSalary] = useState();
	const [jobType, setJobType] = useState(""); 
		// DROPDOWN: Unknown, Remote, On-Site, Hybrid
	const [location, setLocation] = useState("");
	const [followUp, setFollowUp] = useState();
		//Date Example: https://gist.github.com/mohanramphp/af4f0267f5b1c3c0e726e18019eb2a0b
	const [notes, setNotes] = useState("");
	const [stage, setStage] = useState(""); // drop down

	const navigate = useNavigate();
    const [errors, setErrors] = useState({});

	const onSubmitHandler = (e) => {
        e.preventDefault();
		axios.post('http://localhost:8000/api/jobs',
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
				// The reason for validation error not showing up is the re-routing to error. Please do NOT comment this out ever again.
				// navigate('/career-detector/error')
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
			<div class="mb-5 text-center">
				<div class="text-mont p-1 d-flex justify-content-between align-items-center">
					<p class="navbar-brand">
						<strong>ADD JOB</strong>
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
		.---. .--. .--. .    .
		|    :    :|   )|\  /|
		|--- |    ||--' | \/ |
		|    :    ;|  \ |    |
		'     `--' '   `'    '
		 --> */}
			<div className="text-mont d-flex justify-content-center">
				<Form
					className="mt-5 form-sizing-double blurred-box-form"
					onSubmit={onSubmitHandler}
				>		
					{/* <input type="hidden" value="${userLogin.id}" path="user"/> */}
					<div className="d-flex justify-content-center">
						<Form.Group className="form-sizing-double card-body">
							<Form.Label> Next Follow Up: </Form.Label>
							<Form.Control
								value={followUp}
								type="datetime-local"
								className="text-center"
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
								value={title}
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
								value={company}
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
								value={salary}
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
								value={jobType}
								onChange={(e) => {
												setJobType(e.target.value)
											}}
							>
								<option defaultValue="Make a Selection"></option>
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
							<Form.Label> Location (Optional)</Form.Label>
							<Form.Control
								value={location}
								className="text-center"
								type="text"
								placeholder="(enter city name)"
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
								value={stage}
								className="text-center"
								onChange={(e) => {
												setStage(e.target.value)
											}}
							>
								<option defaultValue="Make a Selection"></option>
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
								value={notes}
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
							<button className="btn-link-style-general btn btn-link-style-submit mt-3">Add opportunity</button>
						</Form.Group>
					</div>

				</Form>
			</div>
		</div>
	);
};

export default AddJob;