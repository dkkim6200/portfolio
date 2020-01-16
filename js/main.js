var projects = [
	{
		"id": 10,
		"title": "Wizard VR Chess",
		"folder": "wizard_chess",
		"skills": ["C#", "Unity", "IBM Watson Speech-to-text API"],
		"description": 'wizard_chess.html',
		"thumbnail": "1.jpg",
		"numImages": 3
	},
	{
		"id": 2,
		"title": "Reactor Engine",
		"folder": "reactor_engine",
		"skills": ["C++", "OpenGL", "Blender"],
		"description": 'reactor_engine.html',
		"thumbnail": "1.jpg",
		"numImages": 3
	},
	{
		"id": 11,
		"title": "Lumos",
		"folder": "lumos",
		"skills": ["C#", "Unity", "Microsoft Azure NLP SDK"],
		"description": 'lumos.html',
		"thumbnail": "2.jpg",
		"numImages": 4
	},
	{
		"id": 12,
		"title": "Self-driving Pokemon Go Player",
		"folder": "pogo",
		"skills": ["Node.js", "Python", "Socket.io"],
		"description": 'pogo.html',
		"thumbnail": "1.jpg",
		"numImages": 2
	},
	{
		"id": 6,
		"title": "Vector World",
		"folder": "vector_world",
		"skills": ["Java", "C++"],
		"description": 'vector_world.html',
		"thumbnail": "1.jpg",
		"numImages": 2
	},
	{
		"id": 13,
		"title": "Rear Parking Distance Sensor",
		"folder": "meme_club",
		"skills": ["Processing", "Arduino"],
		"description": 'meme_club.html',
		"thumbnail": "1.jpg",
		"numImages": 4
	},
	{
		"id": 0,
		"title": "Kindlers Network",
		"folder": "kindlers",
		"skills": ["PHP", "Bootstrap", "MySQL", "HTML", "CSS", "JS", "jQuery", "AJAX"],
		"description": 'kindlers.html',
		"thumbnail": "1.jpg",
		"numImages": 4
	},
	{
		"id": 1,
		"title": "Nano Balls",
		"folder": "nano_balls",
		"skills": ["Unity", "C#"],
		"description": 'nano_balls.html',
		"thumbnail": "1.jpg",
		"numImages": 6
	},
	{
		"id": 3,
		"title": "Spinning Coin",
		"folder": "spinning_coin",
		"skills": ["Unity", "C#", "Blender"],
		"description": 'spinning_coin.html',
		"thumbnail": "1.jpg",
		"numImages": 2
	},
	{
		"id": 9,
		"title": "LifeTime",
		"folder": "lifetime",
		"skills": ["Objective-C", "Swift 3", "SQLite"],
		"description": 'lifetime.html',
		"thumbnail": "1.jpg",
		"numImages": 5
	},
	{
		"id": 4,
		"title": "Sympo",
		"folder": "sympo",
		"skills": ["Objective-C", "Swift 2", "Apache Tomcat", "Java Servlet", "MySQL"],
		"description": "sympo.html",
		"thumbnail": "1.jpg",
		"numImages": 1
	},
	{
		"id": 8,
		"title": "Galaga on iOS",
		"folder": "galaga",
		"skills": ["C++", "Objective-C", "Apache Tomcat", "Java Servlet", "MySQL", "Blender", "Python"],
		"description": 'galaga.html',
		"thumbnail": "1.jpg",
		"numImages": 2
	},
	{
		"id": 14,
		"title": '"The Office" Script Generator',
		"folder": "galaga",
		"skills": ["C++", "Objective-C", "Apache Tomcat", "Java Servlet", "MySQL", "Blender", "Python"],
		"description": 'galaga.html',
		"thumbnail": "1.jpg",
		"numImages": 2
	},
]

// Modal is a global variable.
var modal;

// Source: https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
$.urlParam = function (name) {
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results == null) {
		return null;
	}
	else {
		return decodeURI(results[1]) || 0;
	}
}

$.openModal = function (projectId) {
	modal.style.display = "inline-block";
	curProject = undefined;

	for (var i = 0; i < projects.length; i++) {
		if (projects[i].id == projectId) {
			curProject = projects[i];
			break;
		}
	}

	if (curProject == undefined) {
		return;
	}

	// Disable scroll for the background
	$('body').addClass('no-scroll')

	// Title
	$('.project-title').empty();
	$('.project-title').append(curProject.title);


	// Slideshow
	$('.project-slideshow').remove();
	$('<div></div>').addClass('project-slideshow').appendTo('.project-slideshow-placeholder');

	// If there are multiple images, create a slideshow
	if (curProject.numImages > 1) {
		toAppend = '';
		for (var i = 1; i <= curProject.numImages; i++) {
			toAppend += '<div class="slideshow-cell"><img class="slideshow-cell-image" data-flickity-lazyload="img/projects/' + curProject.folder + '/' + i + '.jpg"?></div>';
		}

		$('.project-slideshow').append(toAppend);

		var $carousel = $('.project-slideshow').flickity({
			cellAlign: 'center',
			contain: true,
			imagesLoaded: true,
			percentPosition: false,
			lazyLoad: true
		});
	}
	// If not, just show the picture.
	else {
		toAppend = '';
		for (var i = 1; i <= curProject.numImages; i++) {
			toAppend += '<img class="slideshow-cell-image" src="img/projects/' + curProject.folder + '/' + i + '.jpg"?>';
		}

		$('.project-slideshow').append(toAppend);

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
	toAppend = toAppend.substring(0, toAppend.length - 2);
	$('.project-skills').append(toAppend);

	// Description
	$('.project-description').empty();
	$('.project-description').load('html/' + curProject.description);
}

$.closeModal = function () {
	$('body').removeClass('no-scroll')
	modal.style.display = "none";
	$('.project-title').empty();
	$('.project-skills').empty();
	$('.project-description').empty();
}

$(document).ready(function () {
	modal = document.getElementsByClassName("project-modal")[0];

	for (var i = 0; i < projects.length; i++) {
		curProject = projects[i];

		toAppend = '<div class="project-cell" project="' + curProject.id + '">';
		toAppend += '<img src="img/projects/' + curProject["folder"] + '/' + curProject['thumbnail'] + '" class="thumbnail">';
		toAppend += '<figcaption>' + curProject["title"] + '</figcaption>';
		toAppend += '</div>'

		$('.selection-bar').append(toAppend);
	}

	$('.project-cell').click(function (e) {
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