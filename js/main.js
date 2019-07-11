var projects = [{
		"id": 0,
		"title": "Kindlers Network",
		"folder": "kindlers",
		"skills": ["PHP", "Bootstrap", "MySQL", "HTML", "CSS", "JS", "jQuery", "AJAX"],
		"description": 'kindlers.html',
		"thumbnail": "kindlers_1.jpg",
		"images": ["kindlers_1.jpg", "kindlers_2.jpg", "kindlers_3.jpg", "kindlers_4.jpg"]
	},
	{
		"id": 1,
		"title": "Nano Balls",
		"folder": "nano_balls",
		"skills": ["Unity", "C#"],
		"description": 'nano_balls.html',
		"thumbnail": "nano_balls_1.jpg",
		"images": ["nano_balls_1.jpg", "nano_balls_2.jpg", "nano_balls_3.jpg", "nano_balls_4.jpg", "nano_balls_5.jpg", "nano_balls_6.jpg"]
	},
	{
		"id": 2,
		"title": "Reactor Engine",
		"folder": "reactor_engine",
		"skills": ["C++", "OpenGL", "Blender"],
		"description": 'reactor_engine.html',
		"thumbnail": "reactor_engine_1.jpg",
		"images": ["reactor_engine_1.jpg", "reactor_engine_2.jpg", "reactor_engine_3.jpg"]
	},
	{
		"id": 3,
		"title": "Spinning Coin",
		"folder": "spinning_coin",
		"skills": ["Unity", "C#", "Blender"],
		"description": 'spinning_coin.html',
		"thumbnail": "spinning_coin_1.jpg",
		"images": ["spinning_coin_1.jpg", "spinning_coin_2.jpg"]
	},
	{
		"id": 4,
		"title": "Sympo",
		"folder": "sympo",
		"skills": ["Objective-C", "Swift 2", "Apache Tomcat", "Java Servlet", "MySQL"],
		"description": "sympo.html",
		"thumbnail": "sympo_1.jpg",
		"images": ["sympo_1.jpg"]
	},
	{
		"id": 5,
		"title": "Tic Tac Toe",
		"folder": "tic_tac_toe",
		"skills": ["C++"],
		"description": 'tic_tac_toe.html',
		"thumbnail": "tic_tac_toe_1.jpg",
		"images": ["tic_tac_toe_1.jpg"]
	},
	{
		"id": 6,
		"title": "Vector World",
		"folder": "vector_world",
		"skills": ["Java", "C++"],
		"description": 'vector_world.html',
		"thumbnail": "vector_world_1.jpg",
		"images": ["vector_world_1.jpg", "vector_world_2.jpg"]
	},
	{
		"id": 7,
		"title": "HeadCheck Health<br>Automation & Testing",
		"folder": "headcheck",
		"skills": ["Java", "Selenium WebDeiver", "Node.js", "Shell Script", "JUnit"],
		"description": "headcheck_health.html",
		"thumbnail": "headcheck_1.jpg",
		"images": ["headcheck_1.jpg"]
	},
	{
		"id": 8,
		"title": "Galaga on iOS",
		"folder": "galaga",
		"skills": ["C++", "Objective-C", "Apache Tomcat", "Java Servlet", "MySQL", "Blender", "Python"],
		"description": 'galaga.html',
		"thumbnail": "galaga_1.jpg",
		"images": ["galaga_1.jpg", "galaga_2.jpg"]
	},
	{
		"id": 9,
		"title": "LifeTime",
		"folder": "lifetime",
		"skills": ["Objective-C", "Swift 3", "SQLite"],
		"description": 'lifetime.html',
		"thumbnail": "lifetime_1.jpg",
		"images": ["lifetime_1.jpg", "lifetime_2.jpg", "lifetime_3.jpg", "lifetime_4.jpg", "lifetime_5.jpg"]
	},
	{
		"id": 10,
		"title": "Wizard VR Chess",
		"folder": "wizard_chess",
		"skills": ["C#", "Unity", "IBM Watson Speech-to-text API"],
		"description": 'wizard_chess.html',
		"thumbnail": "wizard_chess_1.jpg",
		"images": ["wizard_chess_1.jpg", "wizard_chess_2.jpg", "wizard_chess_3.jpg"]
	},
	{
		"id": 11,
		"title": "Virtro Enterntainment",
		"folder": "virtro",
		"skills": ["Node.js", "Unity", "Slack API", "MySQL", "RESTful API Design"],
		"description": 'virtro.html',
		"thumbnail": "virtro_1.jpg",
		"images": ["virtro_1.jpg"]
	},
]

// Modal is a global variable.
var modal;

// Source: https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}

$.openModal = function(projectId) {
	modal.style.display = "inline-block";
	curProject = projects[projectId];

	// Disable scroll for the background
	$('body').addClass('no-scroll')

	// Title
	$('.project-title').empty();
	$('.project-title').append(curProject.title);


	// Slideshow
	$('.project-slideshow').remove();
	$('<div></div>').addClass('project-slideshow').appendTo('.project-slideshow-placeholder');

	toAppend = '';
	for (var i = 0; i < curProject.images.length; i++) {
		toAppend += '<img class="project-image" src="/img/projects/' + curProject.folder + '/' + curProject.images[i] + '"?>';
	}

	$('.project-slideshow').append(toAppend);

	// If there are multiple images, create a slideshow
	if (curProject.images.length > 1) {
		$('.project-slideshow').slidesjs({
			width: $('.project-image').get(0).naturalWidth,
			height: $('.project-image').get(0).naturalHeight,

	        navigation: {
	        	active: false,
	        	effect: "slide"
	        },
	        pagination: {
	        	active: false,
	        	effect: "slide"
	        }
    	});
	}
	// If not, just show the picture.
	else {
		$('.project-slideshow').css({
			'display': 'inline-block'
		});
	}

	// Skills
	$('.project-skills').empty();
	toAppend = '';
	for (var i = 0; i < curProject.skills.length; i++) {
		toAppend += curProject.skills[i] + ", ";
	}
	toAppend = toAppend.substring(0, toAppend.length-2);
	$('.project-skills').append(toAppend);

	// Description
	$('.project-description').empty();
	$('.project-description').load('/html/' + curProject.description);
}

$.closeModal = function() {
	$('body').removeClass('no-scroll')
	modal.style.display = "none";
	$('.project-title').empty();
	$('.project-skills').empty();
	$('.project-description').empty();
}

$(document).ready(function() {
	modal = document.getElementsByClassName("project-modal")[0];

	for (var i = 0; i < projects.length; i++) {
		curProject = projects[i];

		toAppend = '<div class="project-cell" project="' + i + '">';
		toAppend += '<img src="/img/projects/' + curProject["folder"] + '/' + curProject['thumbnail'] + '" class="thumbnail">';
		toAppend += '<figcaption>' + curProject["title"] + '</figcaption>';
		toAppend += '</div>'

		$('.selection-bar').append(toAppend);
	}

	$('.project-cell').click(function(e) {
		e.preventDefault();

		// Get the project from the project index of the clicked cell.
		projectId = $(e.currentTarget).attr('project');
		$.openModal(projectId);
	});

	$('.close').on('click', $.closeModal);
	$('.done').on('click', $.closeModal);

	var projectFromUrl = $.urlParam("project");
	if (projectFromUrl != null) {
		$.openModal(projectFromUrl);
	}
});