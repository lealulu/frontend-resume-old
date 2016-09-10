var bio = {
    "name": "Leah Barlow",
    "role": "Web Developer",
    "contacts": {
      "mobile": "555-555-5555",
      "email": "lebarlow@mailme.org",
      "github": "lealulu",
      "location": "Red Bank, NJ"
    },
    "welcomeMessage": "Hello! Welcome to my resume.",
    "skills": [
      "Counseling", "Design", "Conceptualization"],
    "bioPic": "images/me.jpg"
};

var work = {
	"jobs": [{
		"employer": "Barnabas Health",
		"location": "Toms River, NJ",
		"title": "Art Therapist",
		"dates": "Aug 2014 - current",
    "description": "Responsible for running therapy groups, contributing to treatment team, assessing new admissions, and documenting progress of adult and geriatric patients in an acute inpatient psychiatric setting."
    },
    {
    "employer": "Declarations, Inc.",
    "location": "Freehold, NJ",
    "title": "Life Coach",
    "dates": "Sept 2013 - June 2014",
    "description": "Assisted and motivated adults with chronic mental illness with life skills, goal setting, and treatment compliance in supportive housing environment."
    }
  ]
};

var projects = {
  "projects": [{
    "title": "The Lived Experience of Adults with Persistent Lyme Disease Symptoms",
    "dates": "10/2011 - 09/2013",
    "description": "An arts-based phenomenological research study that looked at what adults with persistent Lyme Disease symptoms experience in everyday life.",
    "images": ["images/project1.jpg"],
  }]
};

var education = {
  "schools": [
    {
      "name": "Drexel University",
      "location": "Philadelphia, PA",
      "degree": "MA",
      "major": ["Art Therapy"],
      "dates": "2013"
    },
    {
      "name": "Monmouth University",
      "location": "West Long Branch, NJ",
      "degree": "BA",
      "major": ["Art"],
      "dates": "2010"
    }],
  "onlineCourses": [
    {
      "school": "Udacity",
      "title": "Intro to Programming",
      "dates": "2016",
      "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  ]
};

// Displays Header Name, Role, Welcome, and Pic
bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcome);

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedPic);
};
bio.display();


// Displays skills
bio.skills.display = function() {
  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

  for (i=0; i<3; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
    }
  }
};
bio.skills.display();

// Displays contact info
bio.contacts.display = function() {
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);

  var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGit);
  $("#footerContacts").append(formattedGit);

};
bio.contacts.display();


// Displays work history
work.display = function() {
  for(var job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle + formattedDates + formattedDescription);
  }
};
work.display();


// Displays education
education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedSchool);

    var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLoc);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
  }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      $(".education-entry:last").append(formattedOnlineTitle);

      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      $(".education-entry:last").append(formattedOnlineSchool);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      $(".education-entry:last").append(formattedOnlineDates);

      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();


// Displays projects
projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();

// Appends Google Map
$("#mapDiv").append(googleMap);

// Logs click location
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// Adds Internationalize Button
//$('#main').append(internationalizeButton);
//function inName(name) {
//  name = name.trim().split(" ");
//  console.log(name)
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//  return name[0] +" "+name[1];
//}
