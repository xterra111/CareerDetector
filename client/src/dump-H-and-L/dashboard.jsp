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
<title>Dashboard</title>

<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!-- for Bootstrap CSS specifically for the table -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>  

<!-- YOUR own local CSS -->
<link rel="stylesheet" href="../views/css/main.css"/>

<!-- For any Bootstrap that uses JS or jQuery-->
<script type="text/javascript" src="js/app.js"></script>
<script src="/webjars/jquery/jquery.min.js"></script>
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
				<strong>Dashboard for ${userLogin.firstName} ${userLogin.lastName}</strong>
			</p>
			<p class="navbar-brand">
				<em>If you get a job making stationery, you won't be going anywhere.</em>
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
			        <a class="nav-link disabled" href="/pane/dashboard">DASHBOARD
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
.---.    .    .       . .--. .--. --.--.---..---. .-. 
|       / \    \     / :    :|   )  |    |  |    (   )
|---   /___\    \   /  |    ||--'   |    |  |---  `-. 
|     /     \    \ /   :    ;|  \   |    |  |    (   )
'    '       `    '     `--' '   `--'--  '  '---' `-' 
          -->                 

	
	<div class="text-center m-5">

		<c:choose>
			<c:when test="${not empty sortNextFollowUp}">
				<h1 class="header-pane"><strong>Favorite Panes</strong></h1>				
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
						<!-- MAP THROUGH ALL ITERATIONS OF USERS' SAVED JOB PANES-->
							<c:forEach var="job" items="${sortNextFollowUp}">
								<c:if test="${job.markingPerson.id!=null}">
									<tr>
										<c:if test="${job.user.id==userLogin.id}">			
											<td class="align-middle text-center">
												<div class=d-flex>
													<div class="m-2 box-link-style-action">	
														<a class="btn btn-link-style-action" href="/pane/edit/${job.id}">Edit</a>
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
												<a class="btn btn-link-style-general" href="/pane/detail/${job.id}">
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
												
												<a class="btn btn-link-style-delete" href="/pane/delete/${job.id}">Delete</a>
											
											</td>
										</c:if>
									</tr>
								</c:if>
							</c:forEach>
					</tbody>
				</table>
			</c:when>
			<c:otherwise>
				<h3>You can't favorite anything if you haven't applied to anything!</h3>
			</c:otherwise>
		</c:choose>
	</div>	
	
<!-- 	                                                      
.--.     .     .-. .   ..--.  .--.     .    .--. .--. 
|   :   / \   (   )|   ||   ):    :   / \   |   )|   :
|   |  /___\   `-. |---||--: |    |  /___\  |--' |   |
|   ; /     \ (   )|   ||   ):    ; /     \ |  \ |   ;
'--' '       ` `-' '   ''--'  `--' '       `'   `'--' 
       -->
	
	<div class="text-center m-5">

		<c:choose>
			<c:when test="${not empty sortNextFollowUp}">
				<h1 class="header-pane"><strong>Dashboard</strong></h1>	
				<c:if test="${job.markingPerson.id==null}">
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
							<!-- MAP THROUGH ALL ITERATIONS OF USERS' SAVED JOB PANES-->
							<c:forEach var="job" items="${sortNextFollowUp}">
								<c:if test="${job.markingPerson.id==null}">
									<tr>
										<c:if test="${job.user.id==userLogin.id}">			
											<td class="align-middle text-center">
												<div class="m-2 box-link-style-action">	
													<a class="btn btn-link-style-action" href="/pane/edit/${job.id}">Edit</a>
												</div>
												<div class="m-2 box-link-style-action">	
													<a class="btn btn-link-style-action" href="/mark/${job.id}">Favorite</a>
												</div>
											</td>
											<td class="align-middle text-center">${job.stageOfInterview}</td>
											<td class="align-middle text-center">
												<fmt:formatDate value="${job.nextFollowUp}" type="date" pattern="MM/dd/yyyy"/>
											</td>
											<td class="box-link-style-general align-middle text-center">
												<a class="btn btn-link-style-general" href="/pane/detail/${job.id}">
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
												
												<a class="btn btn-link-style-delete" href="/pane/delete/${job.id}">Delete</a>
											
											</td>
										</c:if>
									</tr>
								</c:if>
							</c:forEach>
						</tbody>
					</table>
				</c:if>
			</c:when>
			<c:otherwise>
				<h3>You have not applied to any jobs yet! Select 
					<strong>
						<a href="/pane/addjob">Add Job Pane</a>
					</strong> to get started!</h3>				
			</c:otherwise>
		</c:choose>
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
	
</body>
</html>