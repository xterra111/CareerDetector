import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const Dashboard = (props) => {
	const [listAllJobs, setListAllJobs] = useState([]);
	// const [errors, setErrors] = useState({});

	const removeFromDom = (listAllid) => {
		setListAllJobs(listAllJobs.filter((listAll) => listAll._id !== listAllid));
	};
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/jobs")
			.then((res) => {
				console.log(res.data);
				setListAllJobs(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<div class="text-center " id="myHeader">
				<div class="p-1 d-flex justify-content-between align-items-center">
					<p class="navbar-brand">
						<strong>
							DASHBOARD
							{/* Dashboard for ${userLogin.firstName} ${userLogin.lastName} */}
						</strong>
					</p>
					<p class="navbar-brand">
						<em>
							If you get a job making stationery, you won't be going anywhere.
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
									<a
										class="nav-link disabled"
										href="/career-detector/dashboard">
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
			{/* 
.---.    .    .       . .--. .--. --.--.---..---. .-. 
|       / \    \     / :    :|   )  |    |  |    (   )
|---   /___\    \   /  |    ||--'   |    |  |---  `-. 
|     /     \    \ /   :    ;|  \   |    |  |    (   )
'    '       `    '     `--' '   `--'--  '  '---' `-'  */}
			<div class="text-center m-5">
				{/* <c:choose>
					<c:when test="${not empty sortNextFollowUp}"> */}
				<h1 class="header-career-detector">
					<strong>Favorite career-detectors</strong>
				</h1>
				<table class="mb-5 blurred-box-form table table-hover">
					<thead>
						<tr>
							<th class="align-middle text-center">Modify</th>
							<th class="align-middle text-center">Stage of Interview</th>
							<th class="align-middle text-center">Next Follow Up</th>
							<th class="align-middle text-center">Job Title</th>
							<th class="align-middle text-center">Company</th>
							<th class="align-middle text-center">Area of Expertise</th>
							<th class="align-middle text-center">Salary</th>
							<th class="align-middle text-center">Date Applied</th>
							<th class="align-middle text-center">Excitement Level</th>
							<th class="align-middle text-center">Location</th>
							<th class="align-middle text-center">Contact Information</th>
							<th class="align-middle text-center">Job Description</th>
							<th class="align-middle text-center">Notable Benefits</th>
							<th class="align-middle text-center">Additional Notes</th>
							<th class="align-middle text-center">Completed</th>
						</tr>
					</thead>
					<tbody>
						{/* <!-- MAP THROUGH ALL ITERATIONS OF USERS' SAVED JOB career-detectorS--> */}

						{/* <c:forEach var="job" items="${sortNextFollowUp}">
                        <c:if test="${job.markingPerson.id!=null}">
                            <tr>
                                <c:if test="${job.user.id==userLogin.id}">			
                                    <td class="align-middle text-center">
                                        <div class=d-flex>
                                            <div class="m-2 box-link-style-action">	
                                                <a class="btn btn-link-style-action" href="/career-detector/edit-job/${job.id}">Edit</a>
                                            </div>
                                            <div class="m-2 box-link-style-action">	
                                                <a class="btn btn-link-style-action" href="/unmark/${job.id}">Remove</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="align-middle text-center">${job.stageOfInterview}</td>
                                    <td class="align-middle text-center">
                                        <fmt:formatDate value="${job.nextFollowUp}" type="date" pattern="MM/dd/yyyy"/>
                                    </td>
                                    <td class="box-link-style-general align-middle text-center">
                                        <a class="btn btn-link-style-general" href="/career-detector/show-job/${job.id}">
                                            ${job.jobTitle}
                                        </a>
                                    </td>
                                    <td class="align-middle text-center">${job.company}</td>
                                    <td class="align-middle text-center">${job.areaOfExpertise}</td>
                                    <td class="align-middle text-center">
                                        <fmt:formatNumber value = "${job.salary}" type = "currency"/>
                                    </td>
                                    <td class="align-middle text-center">
                                        <fmt:formatDate value="${job.dateApplied}" type="date" pattern="MM/dd/yyyy"/>
                                    </td>
                                    <td class="align-middle text-center">${job.excitementLevel}</td>
                                    <td class="align-middle text-center">${job.location}</td>
                                    <td class="align-middle text-center">${job.contactInformation}</td>
                                    <td class="align-middle text-center">${job.jobDescription }</td>
                                    <td class="align-middle text-center">${job.notableBenefits}</td>
                                    <td class="align-middle text-center">${job.additionalNotes}</td>
                                    <td class="box-link-style-delete align-middle text-center">
                                        
                                        <a class="btn btn-link-style-delete" href="/career-detector/delete/${job.id}">Delete</a>
                                    
                                    </td>
                                </c:if>
                            </tr>
                        </c:if>
                    </c:forEach> */}
					</tbody>
				</table>
				{/* </c:when>
					<c:otherwise> */}
				<h3>You can't favorite anything if you haven't applied to anything!</h3>
				{/* </c:otherwise>
				</c:choose> */}
			</div>
			{/* .--.     .     .-. .   ..--.  .--.     .    .--. .--. 
|   :   / \   (   )|   ||   ):    :   / \   |   )|   :
|   |  /___\   `-. |---||--: |    |  /___\  |--' |   |
|   ; /     \ (   )|   ||   ):    ; /     \ |  \ |   ;
'--' '       ` `-' '   ''--'  `--' '       `'   `'--'  */}
			

			<div class="text-center m-5">
				{/* <c:choose> */}
				{/* <c:when test="${not empty sortNextFollowUp}"> */}
				<h1 class="header-career-detector">
					<strong>Dashboard</strong>
				</h1>
				{/* <c:if test="${job.markingPerson.id==null}"> */}

				<table class="mb-5 blurred-box-form table table-hover">
					<thead>
						<tr>
							<th class="align-middle text-center">Modify</th>
							<th class="align-middle text-center">Next Follow Up</th>
							<th class="align-middle text-center">Job Title</th>
							<th class="align-middle text-center">Company</th>
							<th class="align-middle text-center">Salary</th>
							<th class="align-middle text-center">Commute</th>
							<th class="align-middle text-center">Location</th>
							<th class="align-middle text-center">Stage of Technical Application</th>
							<th class="align-middle text-center">Additional Notes</th>
							<th class="align-middle text-center">Completed</th>
						</tr>
					</thead>
					<tbody>
						{/* <!-- MAP THROUGH ALL ITERATIONS OF USERS' SAVED JOB career-detectorS--> */}
						{/* <c:forEach var="job" items="${sortNextFollowUp}">
                        <c:if test="${job.markingPerson.id==null}"> */}

						{listAllJobs
							? listAllJobs.map((listAll, index) => (
								<tr>
									<td class="align-middle text-center">
										<div class="m-2 box-link-style-action">
											<Link to={`/career-detector/edit-job/${listAll._id}`}>
												{" "}
												Edit{" "}
											</Link>
										</div>
										<div class="m-2 box-link-style-action">
											<Link to={`/mark/${listAll.id}`}> Favorite </Link>
										</div>
									</td>
									
									<td class="align-middle text-center">
										{/* <fmt:formatDate value="${job.nextFollowUp}" type="date" pattern="MM/dd/yyyy"/> */}
										{listAll.followUp}
									</td>
									
									<td class="box-link-style-general align-middle text-center">
										<Link
											to={`/career-detector/show-job/${listAll._id}`}
											class="btn btn-link-style-general">
											{listAll.jobTitle}
										</Link>
									</td>

									<td class="align-middle text-center">{listAll.company}</td>

									<td class="align-middle text-center">
										{/* <fmt:formatNumber value = "${job.salary}" type = "currency"/> */}
										{listAll.salary}
									</td>

									<td class="align-middle text-center">
										{listAll.jobType}
									</td>

									{/* <td class="align-middle text-center">${job.location}</td> */}
									<td class="align-middle text-center">{listAll.location}</td>

									<td class="align-middle text-center">
										{listAll.stage}
									</td>

									<td class="align-middle text-center">
										{listAll.notes}
									</td>

									<td class="box-link-style-delete align-middle text-center">
										<DeleteButton
											listAllID={listAll._id}
											successCallBack={() => removeFromDom(listAll._id)}
										/>
									</td>
									{/* </c:if> */}
								</tr>
							))
							: null}
					</tbody>
				</table>
				{/* </c:if>
    </c:when>
    <c:otherwise> */}
				<h3>
					You have not applied to any jobs yet! Select
					<strong>
						<a href="/career-detector/add-job">Add Job career-detector</a>
					</strong>{" "}
					to get started!
				</h3>
				{/* </c:otherwise>
</c:choose> */}
			</div>
		</div>
	);
};

// Job Title: Text
// Company: Text
// Stage of Application:
// - 1 Applied
// - 2 Pending Company Response
// - 3 Technical Interview
// - 4 Pending Company Offer
// - 5 Pending My Decision
// - Other: See Additional Notes
// Salary: Integer
// Remote:
// - Unknown
// - Remote
// - Hybrid
// - In-Person
// Location: Text
// Additional Notes: Text Area

export default Dashboard;
