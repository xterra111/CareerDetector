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
<title>Show Job</title>

<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!-- for Boostrap CSS specifically for the table -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>  

<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/../views/css/main.css"/>

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
				<strong>Show Job Pane Details for ${userLogin.firstName} ${userLogin.lastName}</strong>
			</p>
			<p class="navbar-brand">
				<em>Inspecting mirrors is a job I could really see myself doing.</em>
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
	<div class="d-flex p-4 mx-2 content justify-content-center">
		
	<!--                  
	.--. .---..---.    .    --.--.     .-. 
	|   :|      |     / \     |  |    (   )
	|   ||---   |    /___\    |  |     `-. 
	|   ;|      |   /     \   |  |    (   )
	'--' '---'  '  '       `--'--'---' `-' 
	-->

		<div class="content container blurred-box-form">
		
			<c:choose>
				<c:when test="${showJob.user.id==userLogin.id}">
					<!-- TABLE -->
			
					<table class="table table-hover">
						<tbody>
							<tr>
								<th>Stage of Interview:</th>
								<td>${showJob.stageOfInterview}</td>
							</tr>
							<tr>
								<th>Next Follow Up:</th>
								<td>
									<fmt:formatDate value="${showJob.nextFollowUp}" type="date" pattern="MM/dd/yyyy"/>
								</td>
							</tr>
							<tr>
								<th>Job Title:</th>
								<td>${showJob.jobTitle}</td>
							</tr>
							<tr>
								<th>Company:</th>
								<td>${showJob.company}</td>
							</tr>
							<tr>
								<th>Salary:</th>
								<td>
									<fmt:formatNumber value = "${showJob.salary}" type = "currency"/>
								</td>
							</tr>
							<tr>
								<th>Date Applied:</th>
								<td>
									<fmt:formatDate value="${showJob.dateApplied}" type="date" pattern="MM/dd/yyyy"/>
								</td>
							</tr>				
							<tr>
								<th>Excitement Level:</th>
								<td>${showJob.excitementLevel}</td>
							</tr>				
							<tr>
								<th>Location:</th>
								<td>${showJob.location}</td>
							</tr>				
							<tr>
								<th>Contact Information:</th>
								<td>${showJob.contactInformation}</td>
							</tr>				
							<tr>
								<th>Job Description:</th>
								<td>${showJob.jobDescription}</td>
							</tr>				
							<tr>
								<th>Notable Benefits:</th>
								<td>${showJob.notableBenefits}</td>
							</tr>				
							<tr>
								<th>Additional Notes:</th>
								<td>${showJob.additionalNotes}</td>
							</tr>
						</tbody>
					</table>
				</c:when>
				<c:otherwise>
					<h3>You are not authorized to view this page</h3>
				</c:otherwise>
			</c:choose>
		</div>
		<div class="d-flex justify-content-center align-items-center polaroid-side-display">
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