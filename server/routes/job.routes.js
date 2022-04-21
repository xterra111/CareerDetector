//We export an object of key-value pairs from our controller.
const JobController = require("../controllers/job.controller");
// import new authenticate file
const { authenticate } = require("../config/jwt.config");

//app parameter gets app (express()) in server.js when invoked
module.exports = (app) => {
	app.get("/api/jobs", JobController.findAllJobs);

	app.post("/api/jobs", authenticate, JobController.createNewJob);

	//app.post("/api/jobs", JobController.createNewJob);

	app.get("/api/jobs/:id", JobController.findOneJob);

	app.get(
		"/api/jobsbyuser/:email",
		authenticate,
		JobController.findAllJobsByUser
	);

	app.delete("/api/jobs/:id", JobController.deleteOneJob);

	app.put("/api/jobs/:id", JobController.updateJob);
};
