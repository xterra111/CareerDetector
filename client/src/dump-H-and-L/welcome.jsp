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
<title>Welcome!</title>

<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

<!-- YOUR own local CSS -->
<link rel="stylesheet" href="../views/css/main.css"/>

<!-- For any Bootstrap that uses JS or jQuery-->
<script type="text/javascript" src="js/app.js"></script>
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
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
				<strong>Welcome ${userLogin.firstName}</strong>
			</p>
			<p class="navbar-brand">
				<em>What kind of windows does 2 Chainz own? TWO PANES!</em>
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
	

	
	<!--  
 .--.    .    .--.  .--. .   . .-. .---..    
:       / \   |   ):    :|   |(   )|    |    
|      /___\  |--' |    ||   | `-. |--- |    
:     /     \ |  \ :    ;:   ;(   )|    |    
 `--''       `'   ` `--'  `-'  `-' '---''---'
the carousel slide class allows the movement for slides
 -->
	<div class="container">
	  <br>
	  <h4>
		<em>"If you fell down yesterday, stand up today." --H.G. Wells</em>
	  </h4>
	  <div id="myCarousel" class="carousel slide" data-ride="carousel"> 
	    <!-- Indicators -->
	    <ol class="carousel-indicators">
	      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
	      <li data-target="#myCarousel" data-slide-to="1"></li>
	      <li data-target="#myCarousel" data-slide-to="2"></li>
	      <li data-target="#myCarousel" data-slide-to="3"></li>
	      <li data-target="#myCarousel" data-slide-to="4"></li>
	    </ol>
	
	    <!-- Wrapper for slides -->
	    <div class="carousel-inner" role="listbox">
	
	      <div class="item active">
	        <img src="../views/img/2011-scotland-blair-castle.jpg" alt="ireland-cathedral" width="460" height="345">
	        <div class="carousel-caption">
	          <h3>Blair Castle, Ireland 2011 - L.Chen</h3>
	        </div>
	      </div>
	      
	      <div class="item">
	        <img src="../views/img/2011-austria-pastel.jpg" alt="austria-pastel" width="460" height="345">
	        <div class="carousel-caption">
	          <h3>Austria 2011 - L.Chen</h3>
	        </div>
	      </div>
	
	      <div class="item">
	        <img src="../views/img/2011-st-andrews.jpg" alt="st-andrews" width="460" height="345">
	        <div class="carousel-caption">
	          <h3>St. Andrews, Scotland 2011 - L.Chen</h3>
	         	</div>
	      </div>
	    
	      <div class="item">
	        <img src="../views/img/2011-ireland-modern1.jpg" alt="2011-austria-stained-glass" width="460" height="345">
	        <div class="carousel-caption">
	          <h3>Ireland 2011 - L.Chen</h3>
	        </div>
	      </div>
	
	      <div class="item">
	        <img src="../views/img/2011-ireland-cathedral.jpg" alt="ireland-cathedral" width="460" height="345">
	        <div class="carousel-caption">
	          <h3>Ireland 2011 - L. Chen</h3>
	        </div>
	      </div>	    
	    </div>
    </div>
	
    <!-- Move Right Controls -->
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</body>
</html>