<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="UTF-8" import="java.util.Date" %>

<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"  %>

<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"  %>

<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"  %>
    
<!-- Formatting (dates) --> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Job</title>

<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/../views/css/main.css"/>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>


</head>
<body>
	
	<!-- 
.   .    .    .       ..--.     .    .--. 
|\  |   / \    \     / |   )   / \   |   )
| \ |  /___\    \   /  |--:   /___\  |--' 
|  \| /     \    \ /   |   ) /     \ |  \ 
'   ''       `    '    '--' '       `'   `
https://getbootstrap.com/docs/4.0/components/navbar/
 -->
 	<div class="blurred-box text-center " id="myHeader">
		<div class="p-1 blurred-box d-flex justify-content-between align-items-center">
			
			<p class="navbar-brand">
				<strong>Edit Job Pane for ${userLogin.firstName} ${userLogin.lastName}</strong>
			</p>
			<p class="navbar-brand">
				<em>Now I've gotten into astronomy, and my whole career is looking up.</em>
			</p>
		</div>	 
	 	<div class="mb-3 text-center">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			  <a class="navbar-brand" href="/pane/welcome">PANE</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNav">
			    <ul class="navbar-nav">
			      <li class="m-1 nav-item">
			        <a class="nav-link" href="/pane/dashboard">DASHBOARD
		        	</a>
			      </li>
			      <li class="m-1 nav-item">
			        <a class="nav-link" href="/pane/addjob">ADD JOB PANE</a>
			      </li>
			      <li class="m-1 nav-item">
			        <a class="nav-link" href="/">SIGN OUT</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		</div>
	</div>
	<!-- 
.---.--.--.   ..---..--.      .   ..---.    .    .--. .---..--. 
|      |   \ / |    |   :     |   ||       / \   |   :|    |   )
|---   |    /  |--- |   |     |---||---   /___\  |   ||--- |--' 
|      |   / \ |    |   ;     |   ||     /     \ |   ;|    |  \ 
'    --'--'   ''---''--'      '   ''---''       `'--' '---''   `
 -->


	<script>
		window.onscroll = function() {myFunction()};
		
		var header = document.getElementById("myHeader");
		var sticky = header.offsetTop;
		
		function myFunction() {
		  if (window.pageYOffset > sticky) {
		    header.classList.add("sticky");
		  } else {
		    header.classList.remove("sticky");
		  }
		}
	</script>
	

	<div class="d-flex p-4 mx-2 content justify-content-center">	
		<!--     
		.---. .--. .--. .    .
		|    :    :|   )|\  /|
		|--- |    ||--' | \/ |
		|    :    ;|  \ |    |
		'     `--' '   `'    '             
		 -->

			<c:choose>
				<c:when test="${editJob.user.id==userLogin.id}">

					<div class="p-4 mx-5 blurred-box-form">
						<form:form action="/pane/edit/${editJob.id}" method="post" modelAttribute="editJob">
							<div class="d-flex justify-content-center">
							
							     <!-- userId -->
			  					<form:input type="hidden" value="${userLogin.id}" path="user"/>    
							
								<div class="form-sizing-double form-group card-body">
									<form:label path="stageOfInterview">Stage of Interview:</form:label>
									<form:errors class="text-danger" path="stageOfInterview"/>
									<form:input class="form-control" value="${editJob.stageOfInterview}" path="stageOfInterview"/>
								</div>
								<div class="form-sizing-double form-group card-body">
									<form:label path="nextFollowUp">Next Follow Up:</form:label>
									<form:errors class="text-danger" path="nextFollowUp"/>
									<form:input type="date" class="form-control" path="nextFollowUp"/>
								</div>
							</div>
	
							<div class="d-flex justify-content-center">
								<div class="form-sizing-double form-group card-body">
									<form:label path="jobTitle">Job Title:</form:label>
									<form:errors class="text-danger" path="jobTitle"/>
									<form:input class="form-control" path="jobTitle"/>
								</div>
								<div class="form-sizing-double form-group card-body">
									<form:label path="company">Company:</form:label>
									<form:errors class="text-danger" path="company"/>
									<form:input class="form-control" path="company"/>
								</div>
							</div>
							<div class="d-flex justify-content-center">
								<div class="form-sizing-double form-group card-body">
									<form:label path="areaOfExpertise">Area of Expertise:</form:label>
									<form:errors class="text-danger" path="areaOfExpertise"/>
									<form:input class="form-control" path="areaOfExpertise"/>
								</div>
								<div class="form-sizing-double form-group card-body">
									<form:label path="salary">Salary:</form:label>
									<form:errors class="text-danger" path="salary"/>
									<form:input type="float" class="form-control" path="salary"/>
								</div>
							</div>
							<div class="d-flex justify-content-center">
								<div class="form-sizing-double form-group card-body">
									<form:label path="dateApplied">Date Applied:</form:label>
									<form:errors class="text-danger" path="dateApplied"/>
									<form:input type="date" class="form-control" path="dateApplied"/>
								</div>	
								<div class="form-sizing-double form-group card-body">			
									<form:label path="excitementLevel">Excitement Level:</form:label>
									<form:errors class="text-danger" path="location"/>			
									<form:select class="form-control" path="excitementLevel" name="excitementLevel">
										<option value="0 - No Opinion">0 - No Opinion</option>
										<option value="1 - Not Excited">1 - Not Excited</option>
										<option value="2 - Leaning toward no">2 - Leaning toward no</option>
										<option value="3 - Leaning toward yes">3 - Leaning toward yes</option>
										<option value="4 - Really excited!">4 - Really excited!</option>
										<option value="Other: See Additional Notes">Other: See Additional Notes</option>
									</form:select>
								</div>
								<div class="form-sizing-double form-group card-body">			
									<form:label path="location">Location:</form:label>
									<form:errors class="text-danger" path="location"/>			
									<form:select class="form-sizing-single form-control" path="location" name="location">
										<option value="unknown">Unknown</option>
										<option value="inPerson">In Person</option>
										<option value="hybrid">Hybrid</option>
										<option value="remote">Remote</option>
									</form:select>
								</div>
							</div>
							<div class="d-flex justify-content-center">			
								<div class="form-sizing-double form-group card-body">
									<form:label path="contactInformation">Contact Information:</form:label>
									<form:errors class="text-danger" path="contactInformation"/>
									<br>
								    <form:textarea class="form-control" path = "contactInformation"/>
								</div>
								<div class="form-sizing-double form-group card-body">
									<form:label path="jobDescription">Job Description:</form:label>
									<form:errors class="text-danger" path="jobDescription"/>
									<br>
								    <form:textarea class="form-control" path = "jobDescription"/>
								</div>
							</div>
							<div class="d-flex justify-content-center">
								<div class="form-sizing-double form-group card-body">
									<form:label path="notableBenefits">Notable Benefits:</form:label>
									<form:errors class="text-danger" path="notableBenefits"/>
									<br>
								    <form:textarea class="form-control" path = "notableBenefits"/>
								</div>
								<div class="form-sizing-double form-group card-body">
									<form:label path="additionalNotes">Additional Notes:</form:label>
									<form:errors class="text-danger" path="additionalNotes"/>
									<br>
								    <form:textarea class="form-control" path = "additionalNotes"/>
								</div>
							</div>
							<div class="box-link-style-submit text-center m-2">
								<input class="btn btn-link-style-submit form-sizing-single form-group" type="submit" value="Submit"/>
							</div>
						</form:form>
					</div>

						
				</c:when>
				<c:otherwise>
					<h3>You are not authorized to view this page</h3>
				</c:otherwise>	
			</c:choose>
	
	
		
				<!-- 
			.--. .   . .--. .---. .--. 
			|   )|   |:    :  |  :    :
			|--' |---||    |  |  |    |
			|    |   |:    ;  |  :    ;
			'    '   ' `--'   '   `--' 
			                        
			 -->
			<div class="d-flex justify-content-center align-items-center polaroid-side-display">
				<div class="text-center ">
					<img 
						src="/../views/img/2011-austria-tunnel-of-windows.jpg" 
						alt="austria-tunnel-of-windows"			
						class="polaroid-sizing"
					/>
					<div class="container">
						<p>Austria 2011 - L.Chen</p>
					</div>
				</div>
			</div>
	</div>
</body>
</html>