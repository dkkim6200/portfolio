var projects = [{
		"id": 0,
		"title": "Kindlers Network",
		"folder": "kindlers",
		"skills": ["PHP", "Bootstrap", "MySQL", "HTML", "CSS", "JS", "jQuery", "AJAX"],
		"description": "Created a web application to register new members, sign up online for volunteer opportunities, and display well-formatted list of volunteer events and hours of each member for my school's Kindler's Society (NGO for donating English books to the third-world children).<br><br>Login and sign-up system was implemented with PHP and MySQL, and AJAX to update the volunteer event status.<br><br>Other functionality include executive-only volunteer event posting, as well as managing volunteer hours of the general members.",
		"thumbnail": "kindlers_1.png",
		"images": ["kindlers_1.png", "kindlers_2.png", "kindlers_3.png", "kindlers_4.png"]
	},
	{
		"id": 1,
		"title": "Nano Balls",
		"folder": "nano_balls",
		"skills": ["Unity3D", "C#"],
		"description": '<iframe width="560" height="315" src="https://www.youtube.com/embed/E7-Xl_8F__A" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>',
		"thumbnail": "nano_balls_1.png",
		"images": ["nano_balls_1.png", "nano_balls_2.png", "nano_balls_3.png", "nano_balls_4.png", "nano_balls_5.png", "nano_balls_6.png"]
	},
	{
		"id": 2,
		"title": "Reactor Engine",
		"folder": "reactor_engine",
		"skills": ["C++", "OpenGL", "Blender"],
		"description": '<iframe width="560" height="315" src="https://www.youtube.com/embed/7NeS1_4fmm0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><br><br>Reactor Engine!',
		"thumbnail": "reactor_engine_1.png",
		"images": ["reactor_engine_1.png", "reactor_engine_2.png", "reactor_engine_3.png"]
	},
	{
		"id": 3,
		"title": "Spinning Coin",
		"folder": "spinning_coin",
		"skills": ["Unity3D", "C#", "Blender"],
		"description": '<iframe width="560" height="315" src="https://www.youtube.com/embed/amC7tpIgLnA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><br><br>',
		"thumbnail": "spinning_coin_1.png",
		"images": ["spinning_coin_1.png", "spinning_coin_2.png"]
	},
	{
		"id": 4,
		"title": "Sympo",
		"folder": "sympo",
		"skills": ["Objective-C", "Swift 2", "Apache Tomcat", "Java Servlet"],
		"description": "",
		"thumbnail": "sympo_1.png",
		"images": ["sympo_1.png"]
	},
	{
		"id": 5,
		"title": "Tic Tac Toe",
		"folder": "tic_tac_toe",
		"skills": ["C++"],
		"description": '<iframe width="560" height="315" src="https://www.youtube.com/embed/fZdl4v0SNh0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><br><br>Tic-Tac-Toe with AI implemented',
		"thumbnail": "tic_tac_toe_1.png",
		"images": ["tic_tac_toe_1.png"]
	},
	{
		"id": 6,
		"title": "Vector World",
		"folder": "vector_world",
		"skills": ["Java", "C++", "OpenGL"],
		"description": '<iframe width="560" height="315" src="https://www.youtube.com/embed/DhzuMXQSKn8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe><br><br>VectorWorld!',
		"thumbnail": "vector_world_1.png",
		"images": ["vector_world_1.png", "vector_world_2.png"]
	},
	{
		"id": 7,
		"title": "HeadCheck Health<br>Automation & Testing",
		"folder": "headcheck",
		"skills": ["Java", "Selenium WebDeiver", "Node.js", "Shell Script", "JUnit"],
		"description": "",
		"thumbnail": "headcheck_1.png",
		"images": ["headcheck_1.png"]
	},
	{
		"id": 8,
		"title": "Galaga on iOS",
		"folder": "galaga",
		"skills": ["C++", "Objective-C", "Blender"],
		"description": '<iframe width="560" height="315" src="https://www.youtube.com/embed/QBm9mj1MC3Y" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>',
		"thumbnail": "galaga_1.png",
		"images": ["galaga_1.png", "galaga_2.png"]
	}
]

$(document).ready(function() {
	var modal = document.getElementsByClassName("project-modal")[0];

	$('.close').on('click', function(event) {
		$('body').removeClass('no-scroll')
		modal.style.display = "none";
		$('.project-title').empty();
		$('.project-skills').empty();
		$('.project-description').empty();
	});

	$('.done').on('click', function(event) {
		$('body').removeClass('no-scroll')
		modal.style.display = "none";
		$('.project-title').empty();
		$('.project-skills').empty();
		$('.project-description').empty();
	});

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
		document.location.href = '#project';
		modal.style.display = "inline-block";

		// Disable scroll for the background
		$('body').addClass('no-scroll')

		// Get the project from the project index of the clicked cell.
		projIndex = $(e.currentTarget).attr('project');
		curProject = projects[projIndex];

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
		$('.project-description').append(curProject.description);
	});
});