import React from "react";
import { Link } from "react-router-dom";

const Error = (props) => {
	return (
		<div>
			<p>
				The job you were trying to view/review is not in the system. Would you
				like to add the job?
			</p>
			<Link to={"/career-detector/add-job"}> Add a new job </Link>
			<br />
			<p>Click on the link below to view the dashboard of jobs</p>

			<Link to={"/career-detector/dashboard"}> Dashboard </Link>
		</div>
	);
};

export default Error;
