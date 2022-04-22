import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ShowJob = (props) => {
	const [jobDetails, setJobDetails] = useState({});
	//const { id } = useParams();
	// Added the static value of id to test out the axios call - HS - 04212022
	const id = "626197aaba458d2aaba4e8f2";
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
				navigate("/pets/error");
			});
	}, [id, navigate]);

	return (
		<div>
			<div class=" d-flex content  blurred-box-form w-50">
				{/* <c:choose>
                    <c:when test="${showJob.user.id==userLogin.id}"> */}
				{/* <!-- TABLE --> */}

				<table class="table table-hover">
					<tbody>
						<tr>
							<th>Stage of Interview:</th>
							{/* <td>${showJob.stageOfInterview}</td> */}
						</tr>
						<tr>
							<th>Next Follow Up:</th>
							<td>
								{/* <fmt:formatDate value="${showJob.nextFollowUp}" type="date" pattern="MM/dd/yyyy"/> */}
							</td>
						</tr>
						<tr>
							<th>Job Title:</th>
							{/* <td>${showJob.jobTitle}</td> */}
						</tr>
						<tr>
							<th>Company:</th>
							{/* <td>${showJob.company}</td> */}
						</tr>
						<tr>
							<th>Salary:</th>
							<td>
								{/* <fmt:formatNumber value = "${showJob.salary}" type = "currency"/> */}
							</td>
						</tr>
						<tr>
							<th>Date Applied:</th>
							<td>
								{/* <fmt:formatDate value="${showJob.dateApplied}" type="date" pattern="MM/dd/yyyy"/> */}
							</td>
						</tr>
						<tr>
							<th>Excitement Level:</th>
							{/* <td>${showJob.excitementLevel}</td> */}
						</tr>
						<tr>
							<th>Location:</th>
							{/* <td>${showJob.location}</td> */}
						</tr>
						<tr>
							<th>Contact Information:</th>
							{/* <td>${showJob.contactInformation}</td> */}
						</tr>
						<tr>
							<th>Job Description:</th>
							{/* <td>${showJob.jobDescription}</td> */}
						</tr>
						<tr>
							<th>Notable Benefits:</th>
							{/* <td>${showJob.notableBenefits}</td> */}
						</tr>
						<tr>
							<th>Additional Notes:</th>
							{/* <td>${showJob.additionalNotes}</td> */}
						</tr>
					</tbody>
				</table>
				{/* </c:when>
                    <c:otherwise> */}
				{/* <h3>You are not authorized to view this page</h3> */}
				{/* </c:otherwise>
                    </c:choose> */}
			</div>

			{/* Liam this is the section for your maps....HS-04212022 */}

			<div class=" w-25  justify-content-center align-items-center polaroid-side-display">
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
	);
};

export default ShowJob;
