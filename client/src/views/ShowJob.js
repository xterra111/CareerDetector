import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ShowJob = (props) => {
	const [jobDetails, setJobDetails] = useState({});
	const { id } = useParams();
	// Added the static value of id to test out the axios call - HS - 04212022
	//const id = "626197aaba458d2aaba4e8f2";
	const navigate = useNavigate();

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
						<strong>Show JOB Details</strong>
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
			<div class=" d-flex ">
				<div class=" d-flex content  blurred-box-form w-75">
					{/* <!-- TABLE --> */}

					<table class="table table-hover">
						<tbody>
							<tr>
								<th>Stage of Interview:</th>

								<td>{jobDetails.stage}</td>
							</tr>
							<tr>
								<th>Next Follow Up:</th>
								<td>
									<td>{jobDetails.followUp}</td>
								</td>
							</tr>
							<tr>
								<th>Job Title:</th>

								<td>{jobDetails.jobTitle}</td>
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
								<th>Date Applied:</th>

								<td>
									<td>{jobDetails.dateApplied}</td>
								</td>
							</tr>
							<tr>
								<th>Excitement Level:</th>

								<td>{jobDetails.excitementLevel}</td>
							</tr>
							<tr>
								<th>Location:</th>

								<td>{jobDetails.location}</td>
							</tr>
							<tr>
								<th>Contact Information:</th>

								<td>{jobDetails.contactInformation}</td>
							</tr>
							<tr>
								<th>Job Description:</th>

								<td>{jobDetails.jobDescription}</td>
							</tr>
							<tr>
								<th>Notable Benefits:</th>

								<td>{jobDetails.notableBenefits}</td>
							</tr>
							<tr>
								<th>Additional Notes:</th>

								<td>{jobDetails.additionalNotes}</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* Liam this is the section for your maps....HS-04212022 */}

				<div class=" w-20  d-flex justify-content-center align-items-center polaroid-side-display">
					<div class="content text-center ">
						<img
							src="/../views/img/2011-ireland-modern2.jpg"
							alt="ireland-modern2"
							class="polaroid-sizing-big"
						/>
						<div class="container">
							<p>Ireland 2011 - L.Chen</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowJob;
