
//var skills = ["Salesforce", "Java", "Javascript", "C#"];
var bio={
	"name" : "Maxwell Bialick",
	"role" : "Software Developer",
	"phone" : "830-556-2369",
	"email" : "Maxwell.Bialick1@gmail.com",
	"github" : "MaxBialick",
	"location" : "Plano, Texas",
	"bioPic" : "http://a1.s6img.com/cdn/0024/u/9445987_4468908_f.jpg",
	"welcomeMessage" : "Welcome to my Resume!",
	"skills" : ["Salesforce", "Java", "Javascript", "C#"]
	
};

var skills = bio.skills;

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

var work={
	"jobs": [
	{
		"employer" : "USAA",
		"position" : "Software Developer",
		"dates" : "August 2014 - Present",
		"location" : "Plano, Texas",
		"description" : "Supporting the Claims component. Primarily developing with Java, Javascript, and Salesforce."
	},
	{
		"employer" : "Texas Ski Ranch",
		"position" : "Camp Director",
		"dates" : "May 2012 - August 2012",
		"location" : "New Braunfels, Texas",
		"description" : "Managing both day to day, and strategic operations for Texas Ski Ranch's Action Sports Camp."
	}
	]

}
var education={
	"schools": [
	{
	"school" : "Baylor University",
	"degree" : "Bachelor of Business Administration",
	"schoolDates" : "August 2010 - May 2014",
	"location" : "Waco, Texas",
	"major" : "Computer Information Systems"
	},
	{
	"school" : "Navarro High School",
	"degree" : "Yay High School",
	"schoolDates" : "August 2007 - May 2010",
	"location" : "Geronimo, Texas",
	"major" : "General Studies"
	}

],
"onlineCourses": [
	{
	"title": "Front-End Web Development",
	"onlineSchool": "Udacity",
	"onlineDates": 2014, 
	"url": "http://www.udacity.com"
	},
	{
	"title": "Super Ninja Training",
	"onlineSchool": "The interwebs",
	"onlineDates": 2015, 
	"url": "http://www.ninja-training.com/"
	}
	]
}
var projects={

	"pastProjects": [
	{
		"projectTitle" : "Portfolio",
		"projectDates" : "April 2015",
		"projectDescription" : "Online Portfolio showing my front-end develoment work.",
		"projectImage" : "http://www.cdc.gov/animalimportation/images/dog2.jpg"
	},
	{
		"projectTitle" : "Resume",
		"projectDates" : "May 2015",
		"projectDescription" : "Online Resume showing my front-end develoment work.",
		"projectImage" : "https://aliceinreaderland.files.wordpress.com/2013/01/grumpy-cat.png?w=250&h=200&crop=1"
	}
]

}


bio.display = function()
{
	//bio
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPhone = HTMLmobile.replace("%data%", bio.phone);
	var formattedEmail = HTMLemail.replace("%data%", bio.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);

	$("#header").append([formattedName]);
	$("#header").append([formattedRole]);
	$("#header").append([formattedWelcomeMessage]);
	$("#header").append([formattedBioPic]);
	$("#footerContacts").append([formattedPhone]);
	$("#footerContacts").append([formattedEmail]);
	$("#footerContacts").append([formattedGitHub]);
	$("#footerContacts").append([formattedLocation]);
	$("#header").append((makeUL(skills)));
	 
	//top
	 $("#topContacts").append([formattedPhone]);
	 $("#topContacts").append([formattedEmail]);
	 $("#topContacts").append([formattedGitHub]);
	 $("#topContacts").append([formattedLocation]);
}



work.display = function()
{
		for (job in work.jobs)
		{
			$("#workExperience").append([HTMLworkStart]);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkPosition = HTMLworkTitle.replace("%data%", work.jobs[job].position);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkCity = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedEmployerTitle = formattedEmployer + formattedWorkPosition;
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkCity);
			$(".work-entry:last").append(formattedWorkDescription);

		}
}

projects.display = function()
{
	for (project in projects.pastProjects)
	{
		$("#projects").append([HTMLprojectStart]);

		//Project Portfolio
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.pastProjects[project].projectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",  projects.pastProjects[project].projectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",  projects.pastProjects[project].projectDescription);
		var formattedProjectImage = HTMLprojectImage.replace("%data%",  projects.pastProjects[project].projectImage);
		 
		 $(".project-entry:last").append([formattedProjectTitle]);
		 $(".project-entry:last").append([formattedProjectDates]);
		 $(".project-entry:last").append([formattedProjectDescription]);
		 $(".project-entry:last").append([formattedProjectImage]);
	}
}

education.display = function()
{
	for (university in education.schools)
	{
		//Education
		$("#education").append([HTMLschoolStart]);
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[university].school);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[university].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[university].schoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[university].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[university].major);

		$(".education-entry:last").append([formattedSchool]);
		$(".education-entry:last").append([formattedDegree]);
		$(".education-entry:last").append([formattedSchoolDates]);
		$(".education-entry:last").append([formattedSchoolLocation]);
		$(".education-entry:last").append([formattedSchoolMajor]);

	}

	//Online Education
	for(website in education.onlineCourses)
	{
		$(".education-entry:last").append([HTMLonlineClasses]);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[website].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[website].onlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[website].onlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[website].url);
		 
		 $(".education-entry:last").append([formattedOnlineTitle]);
		 $(".education-entry:last").append([formattedOnlineSchool]);
		 $(".education-entry:last").append([formattedOnlineDates]);
		 $(".education-entry:last").append([formattedOnlineURL]);
	}
}

$("#mapDiv").append(googleMap);

work.display();
projects.display();
education.display();
bio.display();
