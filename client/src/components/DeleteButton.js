import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
	const { listAllID, successCallBack } = props;

	const deleteJob = (e) => {
		axios
			.delete(`http://localhost:8000/api/jobs/${listAllID}`)
			.then((res) => {
				console.log(res);
				successCallBack();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<button class="btn btn-link-style-delete" onClick={deleteJob}>
			Delete
		</button>
	);
};

export default DeleteButton;
