const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");


const JobSchema = new mongoose.Schema(
	{
		// jobTitle, validation 1-30 characters, text
		title: {
			type: String,
			required: [true, "is required"],
			maxlength: [30, "Job title cannot be more than 30 characters"],
		},
		// CompanyName validation 1-50 characters, text
		company: {
			type: String,
			required: [true, "Company name is required"],
			maxlength: [50, "Company name cannot be more than 50 characters"],
		},
		// Salary (number) validation not 0
		salary: {
			type: Number,
			required: [true, "Salary amount is required"],
			min: 0,
		},
		// Remote,OnSite, Hybrid
		jobType: {
			type: String,
			enum: ["Remote", "On-Site", "Hybrid", "Unknown"],
			required: [true, "Please specify job location."],
		},
		// location
		location: {
			type: String,
		},
		// nextFollowUp (Calender), date
		followUp: {
			type: Date,
			validate: function(input) {
				/* return true only if the input is a valid date, AND is 
				greater than or equal to the current date/time */
				return typeof new Date(input) === 'date' && new Date(input) >= new Date();
			},
			message: input => `${input} must be greater than or equal to the current date!`
		},
		// additionalNotes, text
		notes: {
			type: String,
		},
		// stage of interview, enum
		stage: {
			type: String,
			enum: [
				"Applied",
				"Pending Company Response",
				"Technical Interview",
				"Pending Company Offer",
				"Pending My Decision",
				"Other: See Additional Notes",
			],
		},
		// Person who has created the job posting
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);

// unique validation
JobSchema.plugin(uniqueValidator, { message: "Please enter a unique {VALUE}" });

module.exports = Job;
