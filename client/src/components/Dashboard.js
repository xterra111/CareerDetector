import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import DeleteButton from "./DeleteButton";

const Dashboard = (props) => {
	const [listAllJobs, setListAllJobs] = useState([]);

	// need to convert string to date
	const options = {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};
	const displayDate = (d) => {
		let date = new Date(d);
		return date.toLocaleString("en-us", options);
	};


	const removeFromDom = (listAllid) => {
		setListAllJobs(listAllJobs.filter((listAll) => listAll._id !== listAllid));
	};

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
				<div class="text-mont p-1 d-flex justify-content-between align-items-center">
					<p class="navbar-brand">
						<strong>
							DASHBOARD
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

			{/* .--.     .     .-. .   ..--.  .--.     .    .--. .--. 
|   :   / \   (   )|   ||   ):    :   / \   |   )|   :
|   |  /___\   `-. |---||--: |    |  /___\  |--' |   |
|   ; /     \ (   )|   ||   ):    ; /     \ |  \ |   ;
'--' '       ` `-' '   ''--'  `--' '       `'   `'--'  */}
			

			<div class="text-center m-5 text-mont">
				<h1 class="header-career-detector">
					<strong>Dashboard</strong>
				</h1>
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
						{listAllJobs
							? listAllJobs.map((listAll, index) => (
								<tr>
									<td class="align-middle text-center">
										<div class="m-2 box-link-style-action">
											<Link class="btn-link-style-general btn btn-link-style-submit" to={`/career-detector/edit-job/${listAll._id}`}>
												{" "}
												Edit{" "}
											</Link>
										</div>
									</td>
									
									<td class="align-middle text-center">
										{displayDate(listAll.followUp)}
									</td>
									
									<td class="box-link-style-general align-middle text-center">
										<Link
											to={`/career-detector/show-job/${listAll._id}`}
											class="btn btn-link-style-general">
											{listAll.title}
										</Link>
									</td>

									<td class="align-middle text-center">{listAll.company}</td>

									<td class="align-middle text-center">

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
