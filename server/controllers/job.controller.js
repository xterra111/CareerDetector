const Job = require("../models/job.model");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports = {
	findAllJobs: (req, res) => {
		Job.find()
			.populate("createdBy", "email")
			.then((allJobs) => {
				console.log(allJobs);
				res.json(allJobs);
			})
			.catch((err) => {
				console.log("finding allJobs failed");
				res.json({ message: "Something went wrong in findAll", error: err });
			});
	},

	createNewJob: (req, res) => {
		const newJobObject = new Job(req.body);
		// Job.create(req.body);
		console.log(req.body);

		//commenting these out to get a response.
		const decodedJWT = jwt.decode(req.cookies.userToken, {
			complete: true,
		});

		newJobObject.createdBy = decodedJWT.payload.id;

		newJobObject
			.save()

			.then((newJob) => {
				console.log(newJob);
				res.json(newJob);
			})
			.catch((err) => {
				console.log("Something went wrong in createNewJob");
				//We set the response status of 400 to
				//display our err, which is the rejection of our promise.

				//A 400 status means our client is talking
				//to our server just fine, but the client isn't sending good info.

				//A 404 status error means the client's
				//request isn't to the right place or your server is not set up properly

				// a status of 200 means we are looking good!
				res.status(400).json(err);
			});
	},

	findOneJob: (req, res) => {
		//We use the paramater's (params) or the client's request to search for a
		//specific document by the field (here _id) specified
		Job.findOne({ _id: req.params.id }) //the params id MUST MATCH how we write it in our routes!!!
			.then((oneJob) => {
				console.log(oneJob);
				res.json(oneJob);
			})
			.catch((err) => {
				console.log("Find One Job failed");
				res.json({ message: "Something went wrong in findOneJob", error: err });
			});
	},

	deleteOneJob: (req, res) => {
		Job.deleteOne({ _id: req.params.id })
			.then((deletedJob) => {
				console.log(deletedJob);
				res.json(deletedJob);
			})
			.catch((err) => {
				console.log("delete One Job failed");
				res.json({
					message: "Something went wrong in deleteOneJob",
					error: err,
				});
			});
	},

	updateJob: (req, res) => {
		//This Mongoose query requires both a parameter AND body from the request!
		Job.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			//These options return a new doc and allow schema valids to run on PUT req
			{ new: true, runValidators: true }
		)
			.then((updatedJob) => {
				console.log(updatedJob);
				res.json(updatedJob);
			})
			.catch((err) => {
				console.log("Something went wrong in updateJob");
				res.status(400).json(err); //See above (explained in create)
			});
	},
	findAllJobsByUser: (req, res) => {
		if (req.jwtpayload.firstName !== req.params.firstName) {
			console.log("not the user");

			User.findOne({ firstName: req.params.firstName })
				.then((userNotLoggedIn) => {
					Job.find({ createdBy: userNotLoggedIn._id })
						.populate("createdBy", "firstName")
						.then((allJobsFromUser) => {
							console.log(allJobsFromUser);
							res.json(allJobsFromUser);
						});
				})
				.catch((err) => {
					console.log(err);
					res.status(400).json(err);
				});
		} else {
			console.log("current user");
			console.log("req.jwtpayload.id:", req.jwtpayload.id);
			Job.find({ createdBy: req.jwtpayload.id })
				.populate("createdBy", "firstName")
				.then((allJobsFromLoggedInUser) => {
					console.log(allJobsFromLoggedInUser);
					res.json(allJobsFromLoggedInUser);
				})
				.catch((err) => {
					console.log(err);
					res.status(400).json(err);
				});
		}
	},
};
